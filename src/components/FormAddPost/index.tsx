import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Login } from './styles';

import FormField from '../../components/FormField';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';

import auth from '../../services/authService';
import { createPost, editPost } from '../../services/callsApi';

import { PostType } from '../../types/post';

import FormFieldTinyMCE from '../FormFieldTinyMCE';

type FormAddPostProps = {
  defaultValues?: PostType;
  editing?: boolean;
};

const FormAddPost = ({ defaultValues, editing }: FormAddPostProps) => {
  const history = useHistory();
  const [postAuthor, setPostAuthor] = useState(0);

  // Get logged user
  useEffect(() => {
    const getAuthorId = async () => {
      await auth
        .getCurrentUser()
        .then((response) => {
          setPostAuthor(response.data.userid);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAuthorId();
  }, [history]);

  const validationSchema = yup.object().shape({
    title: yup.string().required('E-mail/login inválido'),
    content: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(validationSchema),
    defaultValues: defaultValues,
  });

  /**
   * Executed when we hit submit on the login form
   * @param data Dados do login
   */
  const onSubmit = async (data: any) => {
    if (editing) {
      await editPost(data.id, data)
        .then(() => {
          alert('Post editado com sucesso');
          history.push('/admin/posts');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await createPost({
        title: data.title,
        content: data.content,
        userid: postAuthor,
      })
        .then(() => {
          alert('Post criado com sucesso');
          history.push('/admin/posts');
          reset({});
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <>
      { postAuthor !== null && (
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormField
          name="title"
          label="Title"
          register={register}
          error={errors.title?.message}
          defaultValue={defaultValues?.title}
          setValueFormState={setValue}
        />
        <FormFieldTinyMCE
          name="content"
          type="text"
          label="Content"
          register={register}
          error={errors.content?.message}
          defaultValue={defaultValues?.content}
          setValueFormState={setValue}
        />
        <Login type="submit">{editing ? 'Edit' : 'Create'} Post</Login>
      </Form>
      )}
    </>
  );
};

export default FormAddPost;

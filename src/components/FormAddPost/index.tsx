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

import { toast } from 'react-toastify';

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
          toast.success(`The post ${data.title} was successfully edited!`)
          history.push('/admin/posts');
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await createPost({
        title: data.title,
        slug: data.title,
        content: data.content,
        userid: postAuthor,
      })
        .then(() => {
          toast.success('The post was successfully created!');
          history.push('/admin/posts');
          reset({});
        })
        .catch((err) => {
          const error = err.response.data;

          // Check if slug exists
          if (error.message === 'E_ROW_NOT_FOUND: Row not found') {
            toast.error('There is already a post with this title, please choose another.')
          } else if (error.code === '23505') { // Titulo já existe
            toast.error('There os already a post with this title')
          }
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
          width="100%"
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
          margin_top={'20px'}
          error={errors.content?.message}
          defaultValue={defaultValues?.content}
          setValueFormState={setValue}
        />
        <Login type="submit">{editing ? 'Save' : 'Create'} Post</Login>
      </Form>
      )}
    </>
  );
};

export default FormAddPost;

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Form, Login } from './styles';

import FormField from '../../components/FormField';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useHistory } from 'react-router-dom';

import { createNews, editNews } from '../../services/callsApi';

import FormFieldTinyMCE from '../FormFieldTinyMCE';

import { toast } from 'react-toastify';
import { NewsType } from '../../types/news';

type FormAddProps = {
  defaultValues?: NewsType;
  editing?: boolean;
};

const FormAddNews = ({ defaultValues, editing }: FormAddProps) => {
  const history = useHistory();

  const validationSchema = yup.object().shape({
    title: yup.string().required(),
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
      await editNews(data.id, data)
        .then(() => {
          toast.success(`The news ${data.title} was successfully edited!`);
          history.push('/admin/newsletter');
        })
        .catch((err: any) => {
          console.log(err);
        });
    } else {
      await createNews({
        title: data.title,
        content: data.content,
      })
        .then(() => {
          toast.success('The news was successfully created!');
          history.push('/admin/newsletter');
          reset({});
        })
        .catch((err) => {
          const error = err.response.data;

          // Check if slug exists
          if (error.message === 'E_ROW_NOT_FOUND: Row not found') {
            toast.error(
              'There is already a news with this title, please choose another.'
            );
          } else if (error.code === '23505') {
            // Titulo já existe
            toast.error('There os already a news with this title');
          }
          console.log(err);
        });
    }
  };

  return (
    <>
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
          label="Whats impressive that you made this week?"
          register={register}
          margin_top={'20px'}
          error={errors.content?.message}
          defaultValue={defaultValues?.content}
          setValueFormState={setValue}
        />
        <Login type="submit">{editing ? 'Save' : 'Create'} Newsletter</Login>
      </Form>
    </>
  );
};

export default FormAddNews;

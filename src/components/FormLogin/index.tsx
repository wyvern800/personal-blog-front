import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Login } from './styles';

import FormField from '../../components/FormField';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useHistory } from 'react-router-dom';
import auth from '../../services/authService';

import Link from '../Link';

import { toast } from 'react-toastify';

const FormLogin = () => {

  const history = useHistory();

  const validationSchema = yup.object().shape({
    email: yup.string().required('E-mail/login inválido'),
    password: yup
      .string()
      .max(32, 'Sua senha só pode ter no máximo 32 caracteres!')
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { state } = useLocation();

  /**
   * Executed when we hit submit on the login form
   * @param data Dados do login
   */
  const onSubmit = async (data: any) => {
    await auth
      .login(data?.email, data?.password)
      .then((response) => {

        history.push(state?.from || '/');
        localStorage.setItem('token', response?.data?.token);

        toast.success('You successfully logged in!')
      })
      .catch((err) => {
        console.log(err);
        setError('email', {
          type: 'manual',
          message:
            'Invalid credentials',
        });
        setError('password', {
          type: 'manual',
          message:
            'Invalid credentials',
        });
        toast.error('Invalid credentials');
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="email"
        label="E-mail/Username"
        register={register}
        error={errors.email?.message}
        setValueFormState={setValue}
      />
      <FormField
        name="password"
        type="password"
        label="Password"
        register={register}
        error={errors.password?.message}
        setValueFormState={setValue}
      />
      <Link text="Not registered yet? click to register" linkTo="/register"/>
      <Login type="submit">Login</Login>
    </Form>
  );
};

export default FormLogin;

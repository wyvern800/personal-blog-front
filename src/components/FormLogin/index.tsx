import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Login } from './styles';

import FormField from '../../components/FormField';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import api from '../../services/api';

import { useLocation, useHistory } from 'react-router-dom';

import auth from '../../services/authService';

import { useUserObjectData } from '../../hooks/UserObjectData';

const FormLogin = () => {
  const { userObjectData, setUserObjectData } = useUserObjectData();

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
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { state } = useLocation();

  /**
   * Executado ao dar submit no forum de login
   * @param data Dados do login
   */
  const onSubmit = async (data: any) => {
    await auth
      .login(data?.email, data?.password)
      .then((response) => {

        history.push(state?.from || '/');
        localStorage.setItem('token', response?.data?.token);

      })
      .catch((err) => {
        console.log(err);
        setError('password', {
          type: 'manual',
          message:
            'Autenticação falhou, verifique se o login ou senha não contém erros',
        });
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="email"
        label="E-mail"
        register={register}
        error={errors.email?.message}
      />
      <FormField
        name="password"
        type="password"
        label="Senha"
        register={register}
        error={errors.password?.message}
      />
      <Login type="submit">Login</Login>
    </Form>
  );
};

export default FormLogin;
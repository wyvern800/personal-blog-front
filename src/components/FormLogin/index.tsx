import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { Form } from './styles';

import FormField from '../../components/FormField';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { fakeAuth } from '../../services/fakeApi';

import api from '../../services/api';

import { useLocation, useHistory } from 'react-router-dom';

const FormLogin = () => {
  const history = useHistory();

  const validationSchema = yup.object().shape({
    email: yup.string().email().required('E-mail inválido'),
    password: yup
      .string()
      .min(8, 'Sua senha precisa ter no mínimo 8 carácteres!')
      .max(32, 'Sua senha só pode ter no máximo 32 caracteres!')
      .required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm({ resolver: yupResolver(validationSchema) });

  const { state } = useLocation();
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  /**
   * Executado ao dar submit no forum de login
   * @param data Dados do login
   */
  const onSubmit = async (data: any) => {
    console.log(data);

    await api.post('/login', { uid: data?.email, password: data?.password }).then((response) => {
      //history.push(state?.from || '/');
      console.log(response)
    }).catch((e) => {
      setError("email", {
        type: "manual",
        message: "Autenticação falhou, verifique se o login ou senha não contém erros"
      })
    })

    /*fakeAuth.authenticate(() => {
      history.push(state?.from || '/');
    });*/

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
      <button type="submit">Login</button>
    </Form>
  );
};

export default FormLogin;

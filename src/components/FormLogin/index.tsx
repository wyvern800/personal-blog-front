import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Login } from './styles';

import FormField from '../../components/FormField';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useHistory } from 'react-router-dom';
import auth from '../../services/authService';

import Link from '../Link';

import { toast } from 'react-toastify';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { LoginModalProps } from '../../types/login.modal';

const FormLogin = ({ setLoginModalOpen, onModal }: LoginModalProps) => {

  const history = useHistory();

  const { userObjectData } = useUserObjectData();

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

  /**
   * Executed when we hit submit on the login form
   * @param data Dados do login
   */
  const onSubmit = async (data: any) => {
    await auth
      .login(data?.email, data?.password)
      .then((response) => {

        history.push(userObjectData?.lastURL ? (userObjectData?.lastURL === '/login' ? '/' : userObjectData?.lastURL) : '/');
        localStorage.setItem('token', response?.data?.token);

        toast.success('You successfully logged in!')

        // If there is login modal open, close
        if (setLoginModalOpen) {
          location.reload()
          setLoginModalOpen({isModalOpen: false});
        }
      })
      .catch((err) => {
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
        width={onModal && '100%'}
      />
      <FormField
        name="password"
        type="password"
        label="Password"
        register={register}
        error={errors.password?.message}
        setValueFormState={setValue}
        width={onModal && '100%'}
      />
      <Link text="Not registered yet? click to register" linkTo="/register"/>
      <Login type="submit">Login</Login>
    </Form>
  );
};

export default FormLogin;

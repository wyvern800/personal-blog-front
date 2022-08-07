import React from 'react';
import { useForm } from 'react-hook-form';

import { Form, Login, FormFieldContainer } from './styles';

import FormField from '../../components/FormField';

import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import auth from '../../services/authService';

import Link from '../Link';
import { useHistory } from 'react-router-dom';

const FormRegister = () => {
  const history = useHistory();
  const validationSchema = yup.object().shape({
    username: yup
      .string()
      .required('Invalid username')
      .max(12, "Your username can't have more than 12 characters!"),
    email: yup.string().email().required('E-mail inválido'),
    emailConfirmation: yup
      .string()
      .email()
      .oneOf([yup.ref('email'), null], 'Emails must match'),
    password: yup
      .string()
      .required('Please enter your password.')
      .max(15, 'Sua senha só pode ter no máximo 32 caracteres!'),
    passwordConfirmation: yup
      .string()
      .max(15, 'Sua senha só pode ter no máximo 32 caracteres!')
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    reset,
  } = useForm({ resolver: yupResolver(validationSchema) });

  /**
   * Executed when we hit submit on the register form
   * @param data Registering data
   */
  const onSubmit = async (data: any) => {
    const formattedData = {
      username: data.username,
      email: data.email,
      password: data.password,
    };
    await auth
      .registerUser(formattedData)
      .then(() => {
        alert('User successfully registered');
        history.push('/login');
      })
      .catch((err) => {
        const errorMessage = err?.response.data.message;

        if (errorMessage.includes('users_username_unique')) {
          setError('username', {
            type: 'manual',
            message: 'Username already exists',
          });
          setError('usernameConfirmation', {
            type: 'manual',
            message: 'Username already exists',
          });
        }
        if (errorMessage.includes('users_email_unique')) {
          setError('email', {
            type: 'manual',
            message: 'Email already exists',
          });
          setError('emailConfirmation', {
            type: 'manual',
            message: 'Email already exists',
          });
        }
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        name="username"
        label="Username"
        register={register}
        error={errors.username?.message}
        setValueFormState={setValue}
      />
      <FormFieldContainer>
        <FormField
          name="email"
          label="E-mail"
          register={register}
          error={errors.email?.message}
          setValueFormState={setValue}
          width={'45%'}
        />
        <FormField
          name="emailConfirmation"
          label="Confirm E-mail"
          register={register}
          error={errors.emailConfirmation?.message}
          setValueFormState={setValue}
          width={'45%'}
          margin_left={'20px'}
        />
      </FormFieldContainer>
      <FormFieldContainer>
        <FormField
          name="password"
          type="password"
          label="Password"
          register={register}
          error={errors.password?.message}
          setValueFormState={setValue}
          width={'45%'}
        />
        <FormField
          name="passwordConfirmation"
          type="password"
          label="Confirm Password"
          register={register}
          error={errors.passwordConfirmation?.message}
          setValueFormState={setValue}
          width={'45%'}
          margin_left={'20px'}
        />
      </FormFieldContainer>
      <Link text="Already registered? click to login" linkTo="/login" />
      <Login type="submit">Register</Login>
    </Form>
  );
};

export default FormRegister;

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FormLogin from '../../components/FormLogin';
import api from '../../services/authService';

const Login = () => {
  let history = useHistory();

  // Se o usuário já estiver logado, ignorar
  useEffect(() =>{
    if (api.isUserLogged()) {
      history.push('/');
    }
  }, [])

  return (
    <FormLogin/>
  );
};

export default Login;

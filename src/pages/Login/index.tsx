import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FormLogin from '../../components/FormLogin';
import api from '../../services/authService';

const Login = () => {
  let history = useHistory();

  // If user isn't logged, ignore and moves him to homepage
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

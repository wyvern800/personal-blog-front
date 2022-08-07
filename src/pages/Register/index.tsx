import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import FormRegister from '../../components/FormRegister';
import api from '../../services/authService';

const Register = () => {
  let history = useHistory();

  // If user isn't logged, ignore and moves him to homepage
  useEffect(() =>{
    if (api.isUserLogged()) {
      history.push('/');
    }
  }, [])

  return (
    <FormRegister/>
  );
};

export default Register;

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserObjectData } from '../../hooks/UserObjectData';

const Logout = () => {
  const { setUserObjectData } = useUserObjectData();
  let history = useHistory();

  const handleLogout = () => {
    // Remove o token
    localStorage.removeItem('token');

    // Limpa os dados do context
    setUserObjectData(null);

    // Depois de alguns segundos, redirecionar para a tela de login
    setTimeout(() => {
      history.push('/login');
    }, 3000);
  };

  // Efeito que dispara o logout
  useEffect(() => {
    handleLogout();
  }, []);

  return <>Você foi deslogado...</>;
};

export default Logout;

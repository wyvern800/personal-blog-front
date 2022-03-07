import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserObjectData } from '../../hooks/UserObjectData';

const Logout = () => {
  const { setUserObjectData } = useUserObjectData();
  let history = useHistory();

  // Handles the logging out
  const handleLogout = () => {
    // Removes the token
    localStorage.removeItem('token');

    // Clears data from the context
    setUserObjectData(null);

    // Redirect the logged out user to login after 3 seconds
    setTimeout(() => {
      history.push('/login');
    }, 3000);
  };

  // Effect that triggers the logout
  useEffect(() => {
    handleLogout();
  }, []);

  return <>Você foi deslogado...</>;
};

export default Logout;

import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { Wrapper } from './styles';
import auth from '../../services/authService';
import Loading from '../../components/Loading';
import PulseLoader from "react-spinners/PulseLoader";

const Logout = () => {
  const { setUserObjectData } = useUserObjectData();
  let history = useHistory();

  // Handles the logging out
  const handleLogout = () => {
    // Logs out only if the user is logged in
    if (auth.isUserLogged()) {
      // Removes the token
      localStorage.removeItem('token');

      // Clears data from the context
      setUserObjectData(null);

      // Redirect the logged out user to login after 3 seconds
      setTimeout(() => {
        history.push('/login');
      }, 1000);
    } else {
      history.push('/');
    }
  };

  // Effect that triggers the logout
  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <Wrapper>
      <Loading Icon={PulseLoader} text={'You logged out, redirecting you to homepage'} size={30} />
    </Wrapper>
  );
};

export default Logout;

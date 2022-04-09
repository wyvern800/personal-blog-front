import React, { useState, useEffect } from 'react';
import { User as UserType } from '../../types/user';
import auth from '../../services/authService';
import Tooltip from 'react-power-tooltip';
import { useLocation, useHistory } from 'react-router-dom';
import { LinkLogin } from './styles';

const LoggedUser = () => {
  const history = useHistory();
  const location = useLocation();
  const [loggedUser, setLoggedUser] = useState<UserType>();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  // Get the logged user data
  useEffect(() => {
    const getLoggedUserData = async () => {
      const isUserLogged = auth.isUserLogged();
      setIsUserLogged(isUserLogged);
      await auth.getCurrentUser().then((response) => {
        setLoggedUser(response.data);
      });
    };
    getLoggedUserData();
  }, [location]);

  return isUserLogged ? (
    <div
      style={{ position: 'relative' }}
      onMouseOver={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <Tooltip
        color="white"
        hoverBackground="#1f1f1e"
        backgroundColor="#444444"
        show={showTooltip}
        arrowAlign="center"
        position="bottom left"
        hoverColor="#fb0"
        moveRight="20px"
      >
        <span onClick={() => history.push('/profile')}>My Profile</span>
        <span onClick={() => history.push('/logout')}>Logout</span>
      </Tooltip>
      Olá, <b>{loggedUser?.username}</b>
    </div>
  ) : (
    <>
      <LinkLogin to={'/login'}>Login</LinkLogin>
    </>
  );
};

export default LoggedUser;

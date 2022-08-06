import React, { useState, useEffect } from 'react';
import { User as UserType } from '../../types/user';
import auth from '../../services/authService';
import Tooltip from 'react-power-tooltip';
import { useLocation, useHistory } from 'react-router-dom';
import { Wrapper, LinkLogin, ArrowDropdown, HiddenMenu, Separator } from './styles';
import menuData from '../../constants/menuLinks';

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
      await auth
        .getCurrentUser()
        .then((response) => {
          setLoggedUser(response.data);
          setIsUserLogged(true);
        })
        .catch((error) => {
          const errorMessage = error?.response?.data?.errors[0]?.message;

          // If token is invalid, then user is not logged
          if (errorMessage === 'E_INVALID_API_TOKEN: Invalid API token') {
            setIsUserLogged(false);
            auth.clearToken();
          }
        });
    };
    getLoggedUserData();
  }, [location]);

  return (
    <Wrapper>
      {isUserLogged ? (
        <HiddenMenu
          open={showTooltip}
          onClick={() => setShowTooltip(!showTooltip)}
          //onMouseOver={() => setShowTooltip(true)}
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
            {menuData.menuLinks.map((link: any) => (
              <span key={link.id} onClick={() => history.push(link.linkTo)}>
                {link.title}
              </span>
            ))}
          </Tooltip>
          Hello, <b>{loggedUser?.username}</b>
          <ArrowDropdown
            className={'dropdown-arow'}
            open={showTooltip}
            size={'28px'}
          />
        </HiddenMenu>
      ) : (
        <>
          <LinkLogin to={'/login'}>Login</LinkLogin>
          <Separator>|</Separator>
          <LinkLogin to={'/register'}>Register</LinkLogin>
        </>
      )}
    </Wrapper>
  );
};

export default LoggedUser;

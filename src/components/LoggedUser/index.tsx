import React, { useState, useEffect } from 'react';
import { User as UserType } from '../../types/user';
import auth from '../../services/authService';
import Tooltip from 'react-power-tooltip';
import { useLocation, useHistory } from 'react-router-dom';
import {
  Wrapper,
  LinkLogin,
  ArrowDropdown,
  HiddenMenu,
  Separator,
} from './styles';
import menuData from '../../constants/menuLinks';
import { useUserObjectData } from '../../hooks/UserObjectData';

import { useModal } from '../../hooks/ModalContext';

const LoggedUser = () => {
  const history = useHistory();
  const location = useLocation();
  const [loggedUser, setLoggedUser] = useState<UserType>();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  const { userObjectData, setUserObjectData } = useUserObjectData();
  const { modalOpen, setModalOpen } = useModal();

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

  /**
   * Saves the current URL before the user login, so the user can be redirected
   * back to the last page as soon as the login succeed ;)
   */
  const storeCurrentUrl = () => {
    setUserObjectData({ ...userObjectData, lastURL: location.pathname });
  };

  return (
    <Wrapper>
      {isUserLogged ? (
        <>
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
              <span onClick={() => {
                setModalOpen({
                  ...modalOpen,
                  isModalOpen: true,
                });
                console.log(modalOpen)
              }}>Logout</span>
            </Tooltip>
            Hello, <b>{loggedUser?.username}</b>
            <ArrowDropdown
              className={'dropdown-arow'}
              open={showTooltip}
              size={'28px'}
            />
          </HiddenMenu>
        </>
      ) : (
        <>
          <LinkLogin
            to={'/login'}
            onClick={() => {
              storeCurrentUrl();
            }}
          >
            Login
          </LinkLogin>
          <Separator>|</Separator>
          <LinkLogin to={'/register'}>Register</LinkLogin>
        </>
      )}
    </Wrapper>
  );
};

export default LoggedUser;

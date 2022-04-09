import React, { useEffect, useState } from 'react';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { useHistory } from 'react-router-dom';

import { PrivateRoutes } from '../../routes';

import { Container, Body, Footer, TextFooter } from './styles';

import auth from '../../services/authService';

import { navLinks_admin } from '../../constants/navLinks_admin';

import Navbar from '../Navbar';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const { userObjectData, setUserObjectData } = useUserObjectData();
  const history = useHistory();
  const location = useLocation();

  // Remove last slash from url to set it as active
  const currentUrl = location.pathname?.slice(
    0,
    location.pathname.lastIndexOf('/')
  );
  const [active, setActive] = useState(currentUrl);

  // Effect that authenticates the user
  useEffect(() => {
    async function get() {
      if (!userObjectData) {
        await auth
          .isUserAdmin()
          .catch(() => {})
          .then((response) => {
            const { isAdmin } = response?.data;

            // Sets the user type
            setUserObjectData({
              type_user: isAdmin ? 'admin' : 'user',
            });
          });
      }
    }

    get();
  }, [history, userObjectData, setUserObjectData]);

  return (
    <>
      {userObjectData && (
        <>
          <Container>
            <Navbar
              navigationLinks={navLinks_admin}
              active={active}
              setActive={setActive}
            />
            <Body>
              <PrivateRoutes userObjectData={userObjectData} />
            </Body>
          </Container>
          <Footer>
            <TextFooter></TextFooter>
          </Footer>
        </>
      )}
    </>
  );
};

export default Dashboard;

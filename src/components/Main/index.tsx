import React, { useEffect } from 'react';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { useHistory, Link } from 'react-router-dom';

import { PrivateRoutes } from '../../routes';

import { Container, Body, Navbar, Footer, TextFooter } from './styles';

import auth from '../../services/authService';

const Dashboard = () => {
  const { userObjectData, setUserObjectData } = useUserObjectData();
  const history = useHistory();

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
            <Navbar>
              <Link to="/logout">Deslogar</Link>
            </Navbar>
            <Body>
              <PrivateRoutes userObjectData={userObjectData} />
            </Body>
          </Container>
          <Footer>
            <TextFooter>Footer</TextFooter>
          </Footer>
        </>
      )}
    </>
  );
};

export default Dashboard;

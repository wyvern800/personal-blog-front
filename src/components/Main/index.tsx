import React, { useEffect, useState } from 'react';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { useHistory } from 'react-router-dom';

import { PrivateRoutes } from '../../routes';

import { Container, Body, Footer, TextFooter } from './styles';

import auth from '../../services/authService';

import Navbar from '../Navbar';
import { ModalStates } from '../../types/modal.states';

const Dashboard = () => {
  const { userObjectData, setUserObjectData } = useUserObjectData();

  const [logoutModalOpen, setLogoutModalOpen] = useState<ModalStates>({
    isModalOpen: false,
  });

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
              ...userObjectData,
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
            <Navbar type_user={userObjectData.type_user} />
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

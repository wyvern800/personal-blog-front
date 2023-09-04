import React, { useEffect, useState } from 'react';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { useModal } from '../../hooks/ModalContext';
import { useHistory } from 'react-router-dom';

import { PrivateRoutes } from '../../routes';

import { Container, Body, Footer, TextFooter } from './styles';

import auth from '../../services/authService';

import Navbar from '../Navbar';

import Modal from '../Modal';
import Button from '../Button';

import { InnerModal, Buttons } from '../../styles/global';

const Dashboard = () => {
  const { modalOpen, setModalOpen } = useModal();
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

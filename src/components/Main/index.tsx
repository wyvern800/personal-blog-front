import React, { useEffect, useState } from 'react';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { useHistory } from 'react-router-dom';

import { PrivateRoutes } from '../../routes';

import { Container, Body, Navbar, Footer, TextFooter } from './styles';

import auth from '../../services/authService';
import NavLinkCustom from '../NavLinkCustom';

const Dashboard = () => {
  const { userObjectData, setUserObjectData } = useUserObjectData();
  const history = useHistory();
  const [ active, setActive ] = useState("/posts/add");

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
              <NavLinkCustom title={'Posts'} linkTo={'/posts/add'} active={active} setActive={setActive}/>
              <NavLinkCustom title={'Deslogar'} linkTo={'/logout'} active={active} setActive={setActive}/>
            </Navbar>
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

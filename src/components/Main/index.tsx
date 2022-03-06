import React, { useEffect } from 'react';

import { useUserObjectData } from '../../hooks/UserObjectData';
import { useHistory, Link } from 'react-router-dom';

import { PrivateRoutes } from '../../routes';

import { Container, Body, Navbar, Footer, TextFooter } from './styles';

const Dashboard = () => {
  const { userObjectData, setUserObjectData } = useUserObjectData();
  const history = useHistory();

  // Efeito que autentica o usuário
  useEffect(() => {
    async function get() {
      try {
        if (!userObjectData) {

          /*const result = await api.get(`/users/${3}`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          });*/

          //const { isAdmin } = result.data?.data;

          let data = {};
          let user;

          /*if (isAdmin) {
            user = 'admin';
          } else {
            user = 'member';
          }*/

          data = {
            type_user: 'admin',
          };

          // Seta o tipo do menu
          setUserObjectData(data);
        }
      } catch (error) {
        // Remove tudo do storage
        localStorage.clear();
        history.push('/logout');
      }
    }

    get();
  }, [history, userObjectData, setUserObjectData]);

  return (
    <>
      {userObjectData && (
        <>
          <Container>
            <Navbar>Adicionar Post | <Link to="/logout">Deslogar</Link></Navbar>
            <Body>
              <PrivateRoutes userObjectData={userObjectData} />
            </Body>
          </Container>
          <Footer>
            <TextFooter>Blog dos Primatas</TextFooter>
          </Footer>
        </>
      )}
    </>
  );
};

export default Dashboard;

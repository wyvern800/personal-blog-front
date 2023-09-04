import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/global';
import UserObjectDataProvider from './hooks/UserObjectData';
import Toast from './components/Toast';
import ModalProvider from './hooks/ModalContext';
import LogoutModal from './components/LogoutModal';

function App() {
  return (
    <>
      <ModalProvider>
        <UserObjectDataProvider>
          <LogoutModal />
          <Header />
          <Wrapper>
            <Routes />
            <GlobalStyle />
            <Toast />
          </Wrapper>
          <Footer />
        </UserObjectDataProvider>
      </ModalProvider>
    </>
  );
}

export default App;

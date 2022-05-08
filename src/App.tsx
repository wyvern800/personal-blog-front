import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/global';
import UserObjectDataProvider from './hooks/UserObjectData';

function App() {
  return (
    <>
      <UserObjectDataProvider>
        <Header />
        <Wrapper>
          <Routes />
          <GlobalStyle />
        </Wrapper>
        <Footer />
      </UserObjectDataProvider>
    </>
  );
}

export default App;

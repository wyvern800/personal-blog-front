import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Routes from './routes';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
          <ScrollToTop>
            <Header />
            <Wrapper>
              <Routes />
              <GlobalStyle />
            </Wrapper>
            <Footer />
          </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;

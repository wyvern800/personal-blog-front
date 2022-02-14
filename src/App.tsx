import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Routes from './routes';
import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Header />
            <Routes />
            <GlobalStyle />
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;

import styled, { createGlobalStyle } from 'styled-components';

import background from '../assets/images/bg.jpg';


export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  text-align: center;
  color: gray;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

/* remover seleção de todos os componentes e liberar somente inputs */
-webkit-user-select: none;
-moz-user-select: -moz-none;
-ms-user-select: none;
user-select: none;

/* liberar select em tables */
table {
-webkit-user-select: text;
-moz-user-select: -moz-text;
-ms-user-select: text;
user-select: text;
}
}

body, html {
  //background-color: rgba(26,27,31);
  background-color: white;
  margin: 0;
}

body {
  background: url(${background}) no-repeat center center fixed;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;

  border-top: 20px solid #2d2d2d;
  background-color: #383838;

  @media (max-width: 985px) {
    width: 95%;
  }
`;

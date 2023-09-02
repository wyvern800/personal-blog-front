import styled, { createGlobalStyle } from 'styled-components';

import background from '../assets/images/bg.jpg';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto&display=swap');

* {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;

  color: gray;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

/* remover seleção de todos os componentes e liberar somente inputs */
-webkit-user-select: none;
-moz-user-select: -moz-none;
-ms-user-select: none;
user-select: none;

outline: none;

/* liberar select em tables */
table {
-webkit-user-select: text !important;
-moz-user-select: -moz-text !important;
-ms-user-select: text !important;
user-select: text !important;
 }

 pre, code {
  border-radius: 8px;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
 }

 a {
    text-decoration: none;
}
}

body, html {
  //background-color: rgba(26,27,31);
  //background-color:  #08070d;
  margin: 0;
  height:100%;

  max-width: 100%;
  overflow-x: hidden;
}

body {
  background: url(${background}) no-repeat center center fixed;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  height:100vh;
}
`;

export const Wrapper = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 3%;
  margin-bottom: 3%;

  border-top: 8px solid #2d2d2d;
  border-bottom: 5px solid #2d2d2d;
  background-color: rgba(56, 56, 56, 0.92);
  border-radius: 7px;

  @media (max-width: 985px) {
    width: 95%;
  }
`;

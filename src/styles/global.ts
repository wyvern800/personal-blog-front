import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Viga', sans-serif;
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
`;

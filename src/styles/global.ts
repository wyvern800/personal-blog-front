import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  font-family: 'Viga', sans-serif;
  font-size: 14px;
  text-align: center;
  color: gray;
}

body, html {
  //background-color: rgba(26,27,31);
  background-color: white;
  margin: 0;
}
`;

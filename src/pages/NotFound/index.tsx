import React from 'react';

import { Wrapper, Notfound, Msg, Button } from './styles';

const NotFound = () => {
  return (
    <Wrapper>
      <Notfound>404</Notfound>
      <Msg>Essa página não existe.</Msg>
      <Button to="/">Voltar</Button>
    </Wrapper>
  );
};

export default NotFound;

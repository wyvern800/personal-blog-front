import React from 'react';

import { Wrapper, Notfound, Msg, Button } from './styles';

const NotFound = () => {
  return (
    <Wrapper>
      <Notfound>404</Notfound>
      <Msg>This page does not exist.</Msg>
      <Button to="/">Go back</Button>
    </Wrapper>
  );
};

export default NotFound;

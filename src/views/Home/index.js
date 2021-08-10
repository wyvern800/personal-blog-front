import React from "react";

import { Container } from './styles';

// or less ideally
import { Button } from 'react-bootstrap';

export default function Home() {
  return (
    <>
      <Container>
        <Button>
          Xota
        </Button>
      This is the basic application - Home/index.js
        <p>This is not a paragraph, it is an idea</p>
      </Container>
    </>
  );
}

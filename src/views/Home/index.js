import React, { Component } from 'react';

import { Container, Main } from './styles';
import Title from '../../assets/components/Title';

export default class Home extends Component {
  render() {
    return (
      <>
        <Title name="Home"/>
        <Container>
          <Main className="main">
            <section>section</section>
            <aside>aside</aside>
          </Main>
        </Container>
      </>
    );
  }
}

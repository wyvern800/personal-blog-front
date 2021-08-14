import React, { Component } from 'react';

import { Container, Main, AboutSection } from './styles';
import Title from '../../assets/components/Title';

export default class About extends Component {
  render() {
    return (
      <>
        <Title name="About" />
        <Container>
          <Main>
            <AboutSection>
              <p>DEV 1</p>
            </AboutSection>
            <AboutSection>
              <p>DEV 2</p>
            </AboutSection>
          </Main>
        </Container>
      </>
    );
  }
}

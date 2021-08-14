import React, { Component } from 'react';

import { Container, Main, AboutSection } from './styles';

export default class About extends Component {
    render() {
        return (
            <Container>
              <Main>
                <AboutSection >
                  <p style={{ backgroundColor: '#00ff00' }}>DEV 1</p>
                </AboutSection>
                <AboutSection >
                  <p style={{ backgroundColor: '#0000ff' }}>DEV 2</p>
                </AboutSection>
              </Main>
            </Container>
        );
    }
}

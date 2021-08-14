import React, { Component } from 'react';
import { Container, FooterBar } from './styles';
import myCaco from '../../images/logo.png';

export default class Footer extends Component {
  render() {
    return (
      <Container>
        <div className="links">
          <dl>
            <dt>Titulo</dt>
            <dd>Info 1</dd>
            <dd>Info 2</dd>
          </dl>
          <dl>
            <dt>Titulo</dt>
            <dd>Info 1</dd>
            <dd>Info 2</dd>
          </dl>
          <dl>
            <dt>Titulo</dt>
            <dd>Info 1</dd>
            <dd>Info 2</dd>
          </dl>
        </div>
        <FooterBar>
          <a href="#"><img src={ myCaco }/></a>
          <div className="social-links">Social Links</div>
        </FooterBar>
        <p className="credit">© 2021 Primatas - Seu universo da programação web. Todos os direitos reservados.</p>
      </Container>
    );
  }
}

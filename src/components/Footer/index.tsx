import React, { Component } from 'react';
import { Container, FooterBar, FooterLink } from './styles';

const Footer = () => {
    return (
      <Container>
        <div className="links">
          <dl>
            <dt>Sobre o projeto</dt>
            <dd><FooterLink href="https://github.com/wyvern800/personal-blog-front">Repositório</FooterLink></dd>
            <dd><FooterLink href="https://reactjs.org/">ReactJS</FooterLink></dd>
            <dd><FooterLink href="https://adonisjs.com/">AdonisJS</FooterLink></dd>
          </dl>
          <dl>
            <dt>Informations</dt>
            <dd>Info 1</dd>
            <dd>Info 2</dd>
          </dl>
          <dl>
            <dt>Important Links</dt>
            <dd>Info 1</dd>
            <dd>Info 2</dd>
          </dl>
        </div>
        <FooterBar>
          <a href="#">Copyright © 2021-2022 Primatas Ltd. All rights reserved.</a>
          <div className="social-links"><a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a></div>
        </FooterBar>
        <p className="credit">© 2021-2022 Primatas - Seu universo da programação web. Todos os direitos reservados.</p>
      </Container>
    );
}

export default Footer;

import React, { Component } from 'react';
import { Container, FooterBar, FooterLink } from './styles';
import myCaco from '../../assets/images/logo.png';

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

export default Footer;

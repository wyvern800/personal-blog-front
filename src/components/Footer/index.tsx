import React from 'react';
import {
  Container,
  FooterBar,
  FooterLink,
  Credit,
  Links,
  FooterColumn,
} from './styles';

const Footer = () => {
  return (
    <>
      <Container>
        <Links>
          <FooterColumn>
            <dt>Sobre o projeto</dt>
            <dd>
              <FooterLink href="https://github.com/wyvern800/personal-blog-front">
                Repository (this)
              </FooterLink>
            </dd>
            <dd>
              <FooterLink href="https://github.com/Terrible-Developer/personal-blog-back">
                Repository (back-end)
              </FooterLink>
            </dd>
            <dd>
              <FooterLink href="https://reactjs.org/">ReactJS</FooterLink>
            </dd>
            <dd>
              <FooterLink href="https://adonisjs.com/">AdonisJS</FooterLink>
            </dd>
          </FooterColumn>
          <FooterColumn>
            <dt>Informations</dt>
            <dd>Info 1</dd>
            <dd>Info 2</dd>
          </FooterColumn>
          <FooterColumn>
            <dt>Important Links</dt>
            <dd>Info 1</dd>
            <dd>Info 2</dd>
          </FooterColumn>
        </Links>
        <FooterBar>
          <a href="#">
            Copyright © 2021-2022 Primatas Ltd. All rights reserved.
          </a>
          <div className="social-links">
            <a href="#">Terms of Service</a> | <a href="#">Privacy Policy</a>
          </div>
        </FooterBar>
        <Credit>
          © 2021-2022 Primatas - Seu universo da programação web. Todos os
          direitos reservados.
        </Credit>
      </Container>
    </>
  );
};

export default Footer;

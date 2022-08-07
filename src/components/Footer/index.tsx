import React, { useEffect, useState } from 'react';
import authService from '../../services/authService';
import auth from '../../services/authService';
import { useLocation } from 'react-router-dom';

import {
  Container,
  FooterBar,
  FooterLink,
  Credit,
  Links,
  FooterColumn,
  LinkToAdminDashboard
} from './styles';

const Footer = () => {
  const location = useLocation();
  const [logged, setLogged] = useState(false);
  const [adminUser, setAdminUser] = useState(false);

  // Spawns an admin link to the footer if the logged user is one
  useEffect(() => {
    setLogged(auth.isUserLogged())
    const get = async () => {
      await auth.isUserAdmin().then((response) => {
          const { isAdmin } = response?.data;
          setAdminUser(isAdmin)
      });
    }
    get();
  }, [location])

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
          {adminUser && logged && <LinkToAdminDashboard to="/admin">Go to admins dashboard</LinkToAdminDashboard>}
        </Credit>
      </Container>
    </>
  );
};

export default Footer;

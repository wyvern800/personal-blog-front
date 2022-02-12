import React, { Component } from 'react';
import { Container, NavigationBar } from './styles';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
      <Container>
        <div className="empty-element">Buiu Richards</div>
        <NavigationBar>
          <ul>
            <li>
              <NavLink exact to="/" activeClassName="nav-link-active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/about" activeClassName="nav-link-active">
                About
              </NavLink>
            </li>
          </ul>
          <div></div>
        </NavigationBar>
        <div className="empty-element">pessoaJuridicas</div>
      </Container>
    );
}

export default Header;

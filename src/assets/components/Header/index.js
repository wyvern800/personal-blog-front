import React, { Component } from 'react';
import { Container, NavigationBar } from './styles';
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Container>
        <NavigationBar>
          <ul>
            <li><Link to="">Home</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </NavigationBar>
      </Container>
    );
  }
}

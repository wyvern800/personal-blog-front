import React from 'react';
import { Container, NavigationBar } from './styles';
import { NavLink } from 'react-router-dom';
import LoggedUser from '../LoggedUser';
import headerData from '../../constants/headerLinks';

const Header = () => {
  return (
    <Container>
      <div className="empty-element">Buiu Richards</div>
      <NavigationBar>
        <ul>
          {headerData.headerLinks.map((link: any) => (
            <li>
              <NavLink
                key={link.id}
                exact
                to={link.linkTo}
                activeClassName="nav-link-active"
              >
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div></div>
      </NavigationBar>
      <div>
        <LoggedUser />
      </div>
    </Container>
  );
};

export default Header;

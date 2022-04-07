import React, { useEffect } from 'react';
import { NavBar } from './styles';

import { LinkType } from '../../types/link';
import NavLink from '../NavLink';
import { NavBarType } from '../../types/navbar';

const Navbar = ({ navigationLinks, active, setActive }: NavBarType) => {
  return (
    <NavBar>
      {navigationLinks.map((link: LinkType) => (
        <NavLink
          icon={link.icon}
          title={link.title}
          linkTo={link.linkTo}
          active={active}
          setActive={setActive}
        />
      ))}
    </NavBar>
  );
};

export default Navbar;

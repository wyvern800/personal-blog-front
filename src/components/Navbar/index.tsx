import React, { useEffect } from 'react';
import { NavBar } from './styles';

import { LinkType } from '../../types/link';
import NavLink from '../NavLink';
import { NavBarType } from '../../types/navbar';
import linksData from '../../constants/navLinks';

const Navbar = ({ type_user }: NavBarType) => {
  return (
    <NavBar>
      { linksData.navLinks[0][type_user].map((link: LinkType) => (
        <NavLink
          key={link.id}
          Icon={link.icon}
          title={link.title}
          linkTo={link.linkTo}
        />
      ))}
    </NavBar>
  );
};

export default Navbar;

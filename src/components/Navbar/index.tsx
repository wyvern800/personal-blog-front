import React, { useEffect } from 'react';
import { NavBar } from './styles';

import { LinkType } from '../../types/link';
import NavLink from '../NavLink';
import { NavBarType } from '../../types/navbar';
import { navLinks_admin } from '../../constants/navLinks_admin';

const Navbar = ({ userObjectData, active, setActive }: NavBarType) => {
  return (
    <NavBar>
      {Object.entries(navLinks_admin)
        .filter(([key, value], index) => key === userObjectData.type_user)
        .map(([k, v]) => {
          Object.values(v).map((link: LinkType) => {
            console.log(link);
            return <>{link.title}</>
            /*return (
              <NavLink
                key={link.title}
                icon={link.icon}
                title={link.title}
                linkTo={link.linkTo}
                active={active}
                setActive={setActive}
              />
            );*/
          });
        })}
      {/*navLinks_admin.map((link: LinkType) => (
        <NavLink
          icon={link.icon}
          title={link.title}
          linkTo={link.linkTo}
          active={active}
          setActive={setActive}
        />
      )) */}
    </NavBar>
  );
};

export default Navbar;

import React from 'react';
import { NavLinkStyle } from './styles';
import { useHistory } from 'react-router-dom';

type NavLinkCustomProps = {
  title: string;
  linkTo: string;
  active: string;
  setActive: any;
};

const NavLinkCustom = ({
  title,
  linkTo,
  active,
  setActive,
}: NavLinkCustomProps) => {
  const history = useHistory();

  return (
    <NavLinkStyle
      onClick={() => {
        if (active !== linkTo) {
          setActive(linkTo);
          history.push('/posts/add');
        }
      }}
      active={active === linkTo}
    >
      {title}
    </NavLinkStyle>
  );
};

export default NavLinkCustom;

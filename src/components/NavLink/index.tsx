import React from 'react';
import { MenuLink } from './styles';
import styled from 'styled-components';

type NavLinkCustomProps = {
  id?: any;
  Icon: any;
  title: string;
  linkTo: string;
};

const NavLink = ({
  Icon,
  title,
  linkTo
}: NavLinkCustomProps) => {

  // Creates the icon and change the color based on its status
  const LinkIcon = styled.div`
    margin-right: 1.5%;

    &:hover {
      //fill: #fb0;
      cursor: pointer;
    }
  `;

  return (
    <MenuLink
      to={linkTo} exact={true}
    >
     <LinkIcon> <Icon size={'1.1rem'} /></LinkIcon> {title}
    </MenuLink>
  );
};

export default NavLink;

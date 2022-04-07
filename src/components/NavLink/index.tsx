import React from 'react';
import { Navlink } from './styles';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

type NavLinkCustomProps = {
  icon: any;
  title: string;
  linkTo: string;
  active: string;
  setActive: any;
};

const NavLink = ({
  icon,
  title,
  linkTo,
  active,
  setActive,
}: NavLinkCustomProps) => {
  const history = useHistory();

  // Creates the icon and change the color based on its status
  const Icon = styled(icon)`
    fill: ${(props) => props.active && '#fb0'};
    margin-right: 1.5%;

    &:hover {
    fill: #fb0;
    cursor: pointer;
  }
  `;

  return (
    <Navlink
      onClick={() => {
        if (active !== linkTo) {
          setActive(linkTo);
          history.push(linkTo);
        }
      }}
      active={active === linkTo}
    >
      <Icon active={active === linkTo} size={'1.1rem'} /> {title}
    </Navlink>
  );
};

export default NavLink;

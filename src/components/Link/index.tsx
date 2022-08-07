import React from 'react';
import { StyledLink } from './styles';

type LinkProps = {
  text: string;
  linkTo: string;
  newTab?: boolean;
};

const Link = ({ text, linkTo, newTab }: LinkProps) => {
  return newTab ? (
    <StyledLink to={linkTo} target="_blank" rel="noopener noreferrer">
      {text}
    </StyledLink>
  ) : (
    <StyledLink to={linkTo}>{text}</StyledLink>
  );
};

export default Link;

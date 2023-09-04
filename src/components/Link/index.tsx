import React from 'react';
import { StyledLink } from './styles';

type LinkProps = {
  text: string;
  linkTo: string;
  newTab?: boolean;
};

const Link = ({ text, linkTo, newTab }: LinkProps) => {
  return newTab ? (
    <StyledLink style={{marginTop: '15px', marginBottom: '15px'}} to={linkTo} target="_blank" rel="noopener noreferrer">
      {text}
    </StyledLink>
  ) : (
    <StyledLink style={{marginTop: '15px', marginBottom: '15px'}} to={linkTo}>{text}</StyledLink>
  );
};

export default Link;

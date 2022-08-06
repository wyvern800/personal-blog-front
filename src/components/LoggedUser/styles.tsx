import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from 'react-icons/ri';

type ArrowDropdownProps = {
  open: boolean;
};

export const ArrowDropdown = styled(RiArrowDropDownLine)<ArrowDropdownProps>`
  ${(props) =>
    props.open &&
    css`
      transform: rotate(180deg);
    `}
`;

export const LinkLogin = styled(Link)`
  text-decoration: none;
  color: gray;
  padding: 0.2%;
  margin-left: 1%;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: #fb0;
  }
`;

export const HiddenMenu = styled.div<ArrowDropdownProps>`
  position: relative;

  .dropdown-arow {
    ${(props) =>
      props.open &&
      css`
        fill: white;
      `}
  }
`;

export const Separator = styled.span`
  margin-left: 2%;
  margin-right: 2%;
  color: gray;
`;

export const Wrapper = styled.div`
  cursor: pointer;
`;

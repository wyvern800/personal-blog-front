import styled from 'styled-components';
import { NavLinkType } from '../../types/navlink';

export const NavLinkStyle = styled.a<NavLinkType>`
  color: ${(props) => props.active ?  '#fb0' : 'gray'};
  width: 100%;
  align-items: center;
  height: 10%;
  align-items: center;
  background-color: rgba(23, 23, 23, 0.63);
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: #fb0;
    cursor: pointer;
  }

  &&:not(:first-child) {
    border-top: 1px solid gray;
  }

  @media (max-width: 600px) {
    margin-left: 0.5%;
    margin-right: 0.5%;
  }
`;

import styled from 'styled-components';
import { NavLinkType } from '../../types/navlink';

export const Navlink = styled.a<NavLinkType>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.active ? '#fb0' : 'gray')};
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
    background-color: rgba(31, 30, 30, 0.63);
  }

  &&:not(:first-child) {
    margin-top: 0.5%;
  }

  @media (max-width: 600px) {
    &&:not(:first-child) {
      margin: 0;
      margin-left: 0.5%;
    }
  }
`;

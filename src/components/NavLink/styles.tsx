import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
  width: 100%;
  align-items: center;
  height: 10%;
  align-items: center;
  background-color: rgba(23, 23, 23, 0.63);
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;

  &.active {
    color: #fb0;

    svg {
      fill: #fb0;
    }
  }

  &:focus,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }

  &:hover {
    color: white;
    cursor: pointer;
    background-color: rgba(31, 30, 30, 0.63);

    svg {
      fill: white;
    }
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

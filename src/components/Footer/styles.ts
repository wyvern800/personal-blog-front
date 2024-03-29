import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  font-family: 'Roboto', sans-serif;

  @media (max-width: 600px) {
    * {
      font-size: 11px;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-around;
  background: #181818;
  padding-top: 2%;
  padding-bottom: 1.5%;

  border-style: solid;
  border-width: 1px 0 0 0;
  border-image-source: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    #fff 52%,
    rgba(255, 255, 255, 0)
  );
  border-image-slice: 1;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 600px) {
    align-items: center;
  }

  dt {
    color: lightgray;
    text-transform: uppercase;
    font-weight: bold;
    line-height: 1.1;
    font-family: 'Roboto', sans-serif;
    padding-bottom: 10px;
  }

  dd {
    margin-bottom: 0.5%;
    color: gray;
    text-align: left;
    font-weight: normal;
    font-family: 'Roboto', sans-serif;

    @media (max-width: 600px) {
      &:last-child {
        margin-bottom: 5%;
      }
    }
  }
`;

export const FooterBar = styled.div`
  background-color: rgba(20, 20, 20, 1);
  padding: 15px;

  border: 1px solid #2d2d2d;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  a {
    color: lightgray;
    &:visited {
      color: lightgray;
    }
    &:hover {
      color: #fb0;
    }
  }
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: gray;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #fb0;
  }
`;

export const Credit = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #2d2d2d;
  color: gray;
  padding: 5px;
  background-color: rgba(45, 45, 45);
  font-family: 'Roboto', sans-serif;
`;

export const LinkToAdminDashboard = styled(Link)`
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

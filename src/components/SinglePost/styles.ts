import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div``;

export const Main = styled.div`
  // Celular
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid purple;
`;

export const Body = styled.div`
  //border: 1px solid orange;
  margin-top: 10px;
  margin-bottom: 10px;

  background-color: rgba(124, 131, 128, 0.2);
  border-radius: 30px;

  @media only screen and (max-width: 600px) {
    min-width: 100%;
  }

  //margin-left: 20%;
`;

export const Header = styled.div`
  border: 1px solid #1f1f1e;
  background-color: #1f1f1e;
  padding-top: 1.6%;
  padding-bottom: 1.6%;
  border-radius: 7px 7px 0 0;

  font-weight: bold;
  font-size: 1.3rem;
`;

export const Content = styled.div`
  margin: 5%;

  text-align: justify;
  text-indent: 50px;
`;

export const Footer = styled.div`
  border: 1px solid #1f1f1e;
  background-color: #1f1f1e;
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;

  border-radius: 0 0 7px 7px;

  color: lightgray;

  width: 100%;

  .likes {
    margin-top: 10px;
    margin-bottom: 10px;

    margin: 0.8%;
  }

  .author {
    margin-top: 10px;
    margin-bottom: 10px;

    font-weight: bold;
    font-style: italic;

    margin: 0.8%;
  }
`;

export const LinkToPost = styled(Link)`
  text-decoration: none;
  color: gray;

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

export const Author = styled(Link)`
  text-decoration: none;
  color: gray;

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

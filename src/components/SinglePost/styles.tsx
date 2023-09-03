import styled, { css } from 'styled-components';

import { Link } from 'react-router-dom';

import { AiOutlineEdit } from "react-icons/ai";

export const Container = styled.div``;

type ContentProps = {
  firstSeparated?: Boolean;
};

export const Main = styled.div`
  // Celular
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid purple;
`;

export const Body = styled.div`
  //border: 1px solid orange;
  //margin-top: 10px;
  margin-bottom: 10px;

  background-color: rgba(124, 131, 128, 0.2);
  border-radius: 30px;

  @media only screen and (max-width: 600px) {
    min-width: 100%;
  }

  //margin-left: 20%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border: 1px solid #1f1f1e;
  background-color: #1f1f1e;
  padding-top: 1.6%;
  padding-bottom: 1.6%;
  border-radius: 7px 7px 0 0;
  position: relative;

  font-weight: bold;
  font-size: 1.3rem;
`;

export const Content = styled.div<ContentProps>`
  margin: 5%;

  //text-align: justify;
  //text-indent: 50px;

  word-wrap: break-word;

  ${(props) =>
    props.firstSeparated &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      overflow-wrap: break-word;
      max-height: 150px;
    `};
`;

export const Footer = styled.div`
  border: 1px solid #1f1f1e;
  background-color: #1f1f1e;
  margin-top: 10px;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

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

export const ReadMore = styled.div`
  display: flex;
  margin: 5%;
  margin-bottom: 0;
  justify-content: flex-end;

  a {
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
  }
`;

export const EditThisPost = styled(AiOutlineEdit)`
  position: absolute;
  top: 5px;
  right: 5px;
  opacity: 0;
  font-size: 3rem;

  &:hover {
    opacity: 0.95;
    background-color: black;
    border-radius: 50px;
    padding: 4px;
    cursor: pointer;
  }
`;

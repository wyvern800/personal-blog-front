import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

// Celular
export const Container = styled.div`
  @media (max-width: 600px) {
    * {
      font-size: 11px;
    }

    div.main {
      display: flex;
      flex-direction: column;
    }

    section {
      min-width: 100%;
    }

    aside {
      min-width: 100%;
    }
  }
`;

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid purple;

  section {
    margin-top: 10px;
    margin-bottom: 10px;
    border: 1px solid red;
    //width: 60%;

    @media only screen and (max-width: 600px) {
      width: 100%;
    }

    a:visited,
    a:link {
      text-decoration: none;

      &:focus,
      &:hover,
      &:visited,
      &:link,
      &:active {
        text-decoration: none;
      }
    }
  }

  aside {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 35%;
    border: 1px solid green;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;

  padding: 0.2%;

  width: fit-content;

  margin-right: 0.3%;
`;

export const Tag = styled(Link)`
  border: 3px solid #fb0;
  background-color: #fb0;
  border-radius: 3%;
  padding: 0.5%;
  margin: 0.1%;

  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: white;
  }

  &:hover {
    background-color: inherit;
    border-color: #fb0;
    color: #fb0;
  }

  &:not(:first-child) {
    margin-left: 1%;
  }
`;

export const Post = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;

  justify-items: center;
  align-items: center;

  padding: 1.5%;

  border: 0.1em solid #3c3c3c;
  box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
  border-radius: 10px;

  &:hover {
    transition: background-color 0.3s ease-in-out;
    background-color: rgba(54, 54, 54, 0.24);
    cursor: pointer;
  }

  // Animatin when we move our mouse out
  &:not(:hover) {
    transition: background-color 0.3s ease-in-out;
  }

  &:not(:first-child) {
    border-top: 1px solid rgba(196, 196, 196, 0.2);
  }
`;

export const PostList = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

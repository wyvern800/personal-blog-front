import styled, { keyframes, css } from 'styled-components';

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
    width: 60%;

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

    .article-card {
      padding-top: 20px;
      padding-bottom: 20px;
      border: 0.1em dashed #3c3c3c;
      box-shadow: 0 3px 6px rgb(0 0 0 / 16%);
      border-radius: 10px;
    }

    .article-card:hover {
      transition: background-color 0.3s ease-in-out;
      background-color: rgba(54, 54, 54, 0.24);
      cursor: pointer;
    }

    // Animatin when we move our mouse out
    .article-card:not(:hover) {
      transition: background-color 0.3s ease-in-out;
    }

    .article-card:not(:first-child) {
      border-top: 1px solid rgba(196, 196, 196, 0.2);
    }
  }

  aside {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 35%;
    border: 1px solid green;
  }
`;

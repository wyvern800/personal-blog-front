import styled, { keyframes, css } from 'styled-components';

// Celular
export const Container = styled.div`
  @media only screen and (max-width: 600px) {
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

  div.main {
    display: flex;
    justify-content: space-around;
    border: 1px solid purple;

    section {
      margin-top: 10px;
      margin-bottom: 10px;
      border: 1px solid yellow;
      width: 60%;
    }

    aside {
      margin-top: 10px;
      margin-bottom: 10px;
      width: 35%;
      border: 1px solid cyan;
    }
  }
`;

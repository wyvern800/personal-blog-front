import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    justify-content: center;
    border: 1px solid purple;

    section {
      margin: 10px;
      border: 1px solid yellow;
      width: 50%;
    }

    aside {
      margin: 10px;
      width: 30%;
      border: 1px solid cyan;
    }
  }
`;

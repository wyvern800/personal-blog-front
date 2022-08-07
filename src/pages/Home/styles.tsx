import styled from 'styled-components';

// Celular
export const Container = styled.div`
  margin: 0.1%;

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

  section {
    margin-top: 10px;
    margin-bottom: 10px;
    //border: 1px solid red;
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    width: 25%;
    border: 1px dashed #4d4d4d;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    text-transform: uppercase;
  }
`;

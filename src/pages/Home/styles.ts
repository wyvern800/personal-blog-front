import styled from 'styled-components';

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

  section {
    margin-top: 10px;
    margin-bottom: 10px;
    //border: 1px solid red;
    width: 60%;
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
    width: 35%;
    border: 1px dashed #4D4D4D;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
  }
`;
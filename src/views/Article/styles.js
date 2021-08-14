import styled from 'styled-components';

export const Container = styled.div`
  // Celular
  @media only screen and (max-width: 600px) {
    section.article {
      min-width: 100%;
    }
  }

  div.main {
    display: flex;
    flex-direction: column;
    align-items: center;

    section.article {
      border: 1px solid yellow;
      margin-top: 10px;
      margin-bottom: 10px;
      width: 70%;
      //margin-left: 20%;
    }

    .article-footer {
      border: 1px solid pink;
      margin-top: 10px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .likes {
      margin: 10px;
    }

    .author {
      margin: 10px;
    }
  }
`;

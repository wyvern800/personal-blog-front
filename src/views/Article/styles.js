import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  // Celular
  @media only screen and (max-width: 600px) {
    .article {
      min-width: 100%;
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid purple;
`;

export const ArticleBody = styled.section`
  border: 1px solid orange;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 70%;
  //margin-left: 20%;
`;

export const ArticleHeader = styled.div``;

export const ArticleFooter = styled.div`
  border: 1px solid pink;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .likes {
    margin: 10px;
  }

  .author {
    margin: 10px;

    font-weight: bold;
    font-style: italic;
  }
`;

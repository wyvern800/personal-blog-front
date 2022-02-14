import styled from 'styled-components';

export const Container = styled.div``;

export const Main = styled.div`
  // Celular
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid purple;
`;

export const Body = styled.div`
  border: 1px solid orange;
  margin-top: 10px;
  margin-bottom: 10px;

  @media only screen and (max-width: 600px) {
      min-width: 100%;
    }

  //margin-left: 20%;
`;

export const Header = styled.div``;

export const Content = styled.div``;

export const Footer = styled.div`
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

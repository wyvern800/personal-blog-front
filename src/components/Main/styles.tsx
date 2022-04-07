import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0.1%;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Body = styled.div`
  width: 100%;
  margin: 0.5%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Footer = styled.div`

`;


export const TextFooter = styled.div`

`;

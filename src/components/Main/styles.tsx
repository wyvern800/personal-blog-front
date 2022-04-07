import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Body = styled.div`
  border: 1px solid yellow;
  width: 100%;
`;

export const Navbar = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 15%;

  @media (max-width: 600px) {
    height: auto;
    width: 100%;
  }
`;

export const Footer = styled.div`

`;


export const TextFooter = styled.div`

`;

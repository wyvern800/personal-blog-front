import styled from 'styled-components';

// Navbar
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  width: 15%;

  @media (max-width: 600px) {
    height: auto;
    width: 100%;

  }
`;

import styled from 'styled-components';

// Navbar
export const NavBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 52vh;
  width: 15%;
  background-color: #181818b5;

  @media (max-width: 600px) {
    height: fit-content;
    width: 100%;
  }
`;

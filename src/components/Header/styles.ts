import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 600px) {
    * {
      font-size: 11px;
    }
  }

  display: flex;
  flex-direction: row;
  justify-content: space-around;

  background-color: #181818;
  height: 56px;
  z-index: 1000;
  box-shadow: 0 0 0 #181818;

  padding: 15px;

  .empty-element {
    visibility: hidden !important;
    min-width: 0px !important;
    min-height: 0px !important;
    width: 0px !important;
    height: 0px !important;
  }

  h1 {
    color: red;
  }

  // Navbar active link
  .nav-link-active {
    color: #3a5cc9;
    font-weight: bold;
  }
`;

export const NavigationBar = styled.nav`
  ul {
    list-style-type: none;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: center;

    li {
      margin-left: 10px;
      text-decoration: none;

      a {
        text-decoration: none;
        color: gray;
      }

      a:hover {
        color: white;
      }
    }
  }
`;

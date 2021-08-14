import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: rgba(20, 20, 20, 1);

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
    color: red;
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

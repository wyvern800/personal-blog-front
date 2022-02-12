import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 600px) {
    * {
      font-size: 11px;
    }
  }
  .credit {
    color: gray;
    padding-top: 10px;
  }

  div.links {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: #1f1f1e;
    padding-top: 2%;
    padding-bottom: 1.5%;

    dl {
      dt {
        color: lightgray;
      }

      dd {
        color: gray;
      }
    }
  }
`;

export const FooterBar = styled.div`
  background-color: rgba(20, 20, 20, 1);
  padding: 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: gray;
  &:hover {
    color: #404040;
  }
`;

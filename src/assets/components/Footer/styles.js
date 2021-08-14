import styled from 'styled-components';

export const Container = styled.div`
  .credit {
    color: gray;
  }

  div.links {

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-color: rgba(237, 237, 237, 1);

    dl {
      dt {
        color: black;
      }

      dd {
        color: gray;
      }
    }
  }
`;

export const FooterBar = styled.div`
  background-color: rgba(20, 20, 20, 1);

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

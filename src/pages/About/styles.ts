import styled from 'styled-components';

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
    section.article {
      min-width: 100%;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;

  div {
    width: 100%;
  }
`;
export const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-bottom: 2%;
  border: 1px solid red;
  color: black;
`;

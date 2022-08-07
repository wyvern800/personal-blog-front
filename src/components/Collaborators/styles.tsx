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
  margin: 2%;

  div {
    width: 100%;
  }
`;
export const AboutSection = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2%;
  margin-bottom: 2%;
  color: black;
  border: 1px solid #2d2d2d;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const Profile = styled.img`
  width: 15%;
  height: 15%;

  min-width: 226px;
  min-height: 226px;
`;

export const DevInfo = styled.div`
  border-left: 1px solid #2d2d2d;

  max-height: 226px;
  overflow-y: scroll;

  padding-left: 2%;
  padding-top: 1%;

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5%;
    border: 0;
    border-top: 1px solid #2d2d2d;
    max-height: initial;
    overflow-y: visible;
  }
`;

export const LinkSocial = styled.a`
  text-decoration: underline;
  color: gray;
  font-family: 'Roboto', sans-serif;

  &:hover {
    color: #fb0;
    text-decoration: underline;
  }
`;

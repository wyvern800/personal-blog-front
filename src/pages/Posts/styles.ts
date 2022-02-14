import styled from 'styled-components'

export const Container = styled.div`
  @media only screen and (max-width: 600px) {
    section.article {
      min-width: 100%;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid purple;
`;

export const Main = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;

    div {
        width: 100%;
    }
`

import styled from 'styled-components';

type ContainerProps = {
  width: string;
};

export const Container = styled.div<ContainerProps>`
  border: 1px solid #4d4d4d;
  width: ${(props) => props.width && props.width};
  border-radius: 7px;
  margin-bottom: 10px;

  // Celular
  @media only screen and (max-width: 600px) {
    min-width: 100%;
  }
`;

export const Comment = styled.div`
  display: flex;
  margin: 1%;

  span {
    margin-left: 0.5%;
  }
`;

export const Author = styled.div`
  display: flex;
  font-weight: bold;
  margin-left: 0.5%;
  align-items: center;

  span {
    font-weight: normal;
    font-size: 0.75rem;
  }
`;

export const Avatar = styled.img`
  width: 3%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

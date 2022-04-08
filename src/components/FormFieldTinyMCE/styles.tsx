import styled from 'styled-components';

type ContainerProps = {
  margin_top?: string;
  margin_bottom?: string;
  width?: string;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.margin_top};
  margin-bottom: ${(props) => props.margin_bottom};
  width: ${(props) => props.width};

  @media (max-width: 920px) {
    min-width: 100%;
  }
`;

export const LabelInput = styled.label`
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-family: 'Inconsolata-Bold', monospace;
  font-weight: bold;

  @media (max-width: 920px) {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
`;

export const LabelError = styled.label`
  margin-bottom: 10px;
  margin-top: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  color: red;
  @media (max-width: 920px) {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
`;

type ContainerInputProps = {
  error?: boolean;
}

export const ContainerInput = styled.div<ContainerInputProps>`
  width: 100%;
  position: relative;
  border: ${(props) => (props.error ? '1px solid red' : '')};
  outline: none;
`;

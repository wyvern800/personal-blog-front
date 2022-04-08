import styled from 'styled-components';

type WrapperProps = {
  width?: string;
}

export const Field = styled.div`
  display: flex;
`;

export const Label = styled.label`
  font-weight: bold;

  &:not(:first-child) {
    margin-top: 1%;
  }
`;

export const Input = styled.input`
  margin: 5px;
  display: flex;
  text-align: left;

  width: 100%;

  padding: 1%;

  border: 0;
  margin: 0;

  color: gray;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;

export const LabelInput = styled.label`
  margin-bottom: 10px;
  font-size: 1.2rem;
  font-family: 'Inconsolata-Bold', monospace;
  font-weight: bold;

  &:not(:first-child) {
    margin-top: 1%;
  }

  @media (max-width: 920px) {
    font-size: 1.2rem;
    margin-bottom: 5px;
  }
`;

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  width: ${props => props.width && props.width};
`;

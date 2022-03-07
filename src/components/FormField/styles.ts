import styled from 'styled-components';

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

  border: 0;
  margin: 0;
  padding: 5%;

  color: gray;

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
`;

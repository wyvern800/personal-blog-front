import styled from "styled-components";

type ButtonProps = {
  bgColor?: string;
  color?: string;
  height?: string;
  width?: string;
}

export const Button = styled.button<ButtonProps>`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: ${({bgColor}) => bgColor ? bgColor : '#434444'};
  border: 1px solid ${({bgColor}) => bgColor ? bgColor : '#434444'};
  color: ${({color}) => color ? color : 'lightgray'};
  height: ${({height}) => height ? height : '30px'};
  width: ${({width}) => width ? width : '100%'};
  outline: none;
  border: 0;
  border-radius: 30px;
  padding: 15px;
  justify-content: center;

  &:hover {
    background-color: transparent;
    border: 1px solid ${({color}) => color ? color : '#434444'};
  }
`;

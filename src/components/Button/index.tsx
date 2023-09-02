import React from 'react';
import { Button as BaseButton } from './styles';
import { ButtonType } from "../../types/button";

const Button = ({ children, bgColor, color, height, width, onClick }: ButtonType) => {
  return (
    <BaseButton bgColor={bgColor} color={color} height={height} width={width} onClick={onClick}>
      {children}
    </BaseButton>
  );
};

export default Button;

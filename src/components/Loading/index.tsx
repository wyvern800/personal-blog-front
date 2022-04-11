import React from 'react';
import { DivLoader } from './styles';
import MoonLoader from 'react-spinners/MoonLoader';

type LoadingProps = {
  Icon?: any;
  size?: number;
  text?: string;
  color?: string;
};

const Loading = ({
  Icon = MoonLoader,
  size = 80,
  text = '',
  color = 'gray',
}: LoadingProps) => {
  return (
    <>
      <DivLoader style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ color: color, marginBottom: '1.5%' }}>{text}</span>
        {Icon !== undefined ? (
          <Icon color={color} loading={true} size={size} />
        ) : (
          <MoonLoader color={color} loading={true} size={size} />
        )}
      </DivLoader>
    </>
  );
};

export default Loading;

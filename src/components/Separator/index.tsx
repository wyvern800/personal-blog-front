import React, { Component } from 'react';

import { SeparatorDiv } from './styles';

type SeparatorProps = {
  height: number;
};

const Separator = (props: SeparatorProps) => {
  const { height } = props;

  return (
    <SeparatorDiv>
      <div style={{ height: height + 'px' }} />
    </SeparatorDiv>
  );
};

export default Separator;

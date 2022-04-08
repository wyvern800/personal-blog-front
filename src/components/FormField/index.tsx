import React, { useState } from 'react';

import { Wrapper, LabelInput, Input, ErrorMessage } from './styles';

const FormField = ({
  type = 'text',
  name,
  label,
  width,
  defaultValue = '',
  register,
  setValueFormState = () => {},
  error,
}: any) => {
  const [value, setValue] = useState(() => {
    const newVal = defaultValue;
    return newVal;
  });

  /**
   * Gets the onChange
   */
  const onChange = (e: any) => {
    setValue(e.target.value);
    setValueFormState(name, e.target.value);
  };

  return (
    <Wrapper width={width}>
      <LabelInput>{label ?? ''}</LabelInput>
      <Input
        width={width}
        type={type}
        {...register(name)}
        value={value}
        onChange={onChange}
      />
      <ErrorMessage>{error ?? ''}</ErrorMessage>
    </Wrapper>
  );
};

export default FormField;

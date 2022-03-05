import React, { useState } from 'react';

import { Label, Input, ErrorMessage } from './styles';

const FormField = ({
  type = 'text',
  name,
  label,
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
    <>
      <Label>
        {label ?? ''}:
        <Input
          type={type}
          {...register(name)}
          value={value}
          onChange={onChange}
        />
      </Label>
      <ErrorMessage>{error ?? ''}</ErrorMessage>
    </>
  );
};

export default FormField;

import React, { useState } from 'react';
import styled from 'styled-components';
import { Editor } from '@tinymce/tinymce-react';

import { Container, LabelInput, ContainerInput, LabelError } from './styles';

type FormFieldTinyMCEProps = {
  register: any;
  type?: string;
  name?: string;
  label?: string | null;
  error?: string;
  width?: string;
  margin_top?: string;
  margin_bottom?: string;
  defaultValue?: string;
  setValueFormState: any;
};

const FormFieldTinyMCE = ({
  register,
  name,
  label = null,
  error = '',
  width = '100%',
  margin_top = '0',
  margin_bottom = '0',
  defaultValue = '',
  setValueFormState = () => {},
}: FormFieldTinyMCEProps) => {
  const [value, setValue] = useState(() => {
    setValueFormState(name, defaultValue);
    return defaultValue;
  });

  /**
   * Holds the onChange of the editor
   * @param {string} content Conteúdo do editor ;
   * @param {any} _ editor's object
   */
  const onChange = (content: any, _: any) => {
    setValueFormState(name, content);
    setValue(content);
  };

  return (
    <Container
      width={width}
      margin_top={margin_top}
      margin_bottom={margin_bottom}
    >
      {label && <LabelInput>{label}</LabelInput>}
      <ContainerInput error={error !== ''}>
        <Editor
          apiKey={process.env.REACT_APP_TINYMCE}
          {...register(name)}
          initialValue={defaultValue}
          value={value}
          init={{
            selector: 'textarea',
            height: 300,
            menubar: false,
            oninit: 'setPlainText',
            plugins: [
              'advlist autolink lists link paste',
              'charmap print preview anchor help',
              'searchreplace visualblocks',
              'insertdatetime textcolor',
            ],
            toolbar:
              'undo redo | fontsizeselect | forecolor backcolor | bold strikethrough italic | bullist numlist | link | help',
            content_style:
              'body { font-family: Inconsolata, monospace; font-size: 1.2rem;}',
            branding: false,
            elementpath: false,
            statusbar: false,
            paste_as_text: true,
            paste_text_sticky: true,
          }}
          onEditorChange={(newValue, editor) => onChange(newValue, editor)}
        />
      </ContainerInput>
      {error && <LabelError>{error}</LabelError>}
    </Container>
  );
};

export default FormFieldTinyMCE;

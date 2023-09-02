import React, { useState, useEffect, useRef  } from 'react';
import { Editor } from '@tinymce/tinymce-react';

import { Container, LabelInput, ContainerInput, LabelError } from './styles';

import Prism from 'prismjs';

import "../../styles/prism-material-dark.css";

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
  const onChange = (content: any) => {
    setValueFormState(name, content);
    setValue(content);
  };

  const editorConfig = {
    selector: 'textarea',
    height: 300,
    menubar: false,
    oninit: 'setPlainText',
    plugins: [
      'advlist',
      'autolink',
      'lists',
      'link',
      'image',
      'charmap',
      'print',
      'preview',
      'anchor',
      'searchreplace',
      'visualblocks',
      'fullscreen',
      'insertdatetime',
      'media',
      'table',
      'paste',
      'wordcount',
      'codesample',
    ],
    codesample_languages: [
      { text: 'HTML/XML', value: 'markup' },
      { text: 'JavaScript', value: 'javascript' },
      { text: 'CSS', value: 'css' },
      { text: 'Python', value: 'python' },
      { text: 'Java', value: 'java' },
    ],
    toolbar:
      'fontsize | formatselect | ' +
      'bold strikethrough italic | blocks | forecolor backcolor | alignleft aligncenter |' +
      'alignright alignjustify | bullist numlist outdent indent |' +
      'codesample',
    branding: false,
    elementpath: false,
    statusbar: false,
    paste_as_text: true,
    paste_text_sticky: true,
    skin: 'oxide-dark',
    content_css: 'dark',
    content_style: `@import url('../../styles/prism-material-dark.css');`
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
          apiKey={process.env.TINY_MCE_TOKEN}
          {...register(name)}
          initialValue={defaultValue}
          value={value}
          init={editorConfig}
          onEditorChange={(newValue) => onChange(newValue)}
        />
      </ContainerInput>
      {error && <LabelError>{error}</LabelError>}
    </Container>
  );
};

export default FormFieldTinyMCE;

import React from 'react';
import { SimpleForm, ImageInput, TextInput, required, useTranslate } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';

const BadgeForm = ({ className, ...rest }) => {
  const translate = useTranslate();
  return (
    <SimpleForm {...rest} redirect="show">
      <TextInput source="schema:name" fullWidth validate={[required()]} />
      <MarkdownInput source="description" fullWidth />
      <ImageInput source="schema:image" accept="image/*">
        <ImageField source="src" />
      </ImageInput>
    </SimpleForm>
  );
};

export default BadgeForm;

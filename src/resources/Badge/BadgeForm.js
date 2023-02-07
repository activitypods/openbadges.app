import React from 'react';
import { SimpleForm, ImageInput, TextInput, required, useTranslate } from 'react-admin';
import { MarkdownInput } from '@semapps/markdown-components';
import { ImageField } from '@semapps/field-components';

const BadgeForm = ({ className, ...rest }) => (
  <SimpleForm {...rest} redirect="show">
    <TextInput source="schema:name" fullWidth validate={[required()]} />
    <MarkdownInput source="description" fullWidth />
    <ImageInput source="schema:image" accept="image/*">
      <ImageField source="src" />
    </ImageInput>
    <MarkdownInput source="criteria.narrative" fullWidth />
  </SimpleForm>
);

export default BadgeForm;

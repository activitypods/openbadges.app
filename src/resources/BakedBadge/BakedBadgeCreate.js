import React from 'react';
import { CreateBase, ImageInput, SimpleForm } from 'react-admin';
import { ImageField } from '@semapps/field-components';
import CreatePage from '../../layout/CreatePage';

const BakedBadgeCreate = (props) => (
  <CreateBase {...props}>
    <CreatePage title="Importer un badge">
      <SimpleForm redirect="show">
        <ImageInput source="schema:image" accept="image/*">
          <ImageField source="src" />
        </ImageInput>
      </SimpleForm>
    </CreatePage>
  </CreateBase>
);

export default BakedBadgeCreate;

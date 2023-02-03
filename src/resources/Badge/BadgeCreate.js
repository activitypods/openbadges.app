import React from 'react';
import { CreateBase, useTranslate } from 'react-admin';
import BadgeForm from './BadgeForm';
import CreatePage from '../../layout/CreatePage';

const BadgeCreate = (props) => (
  <CreateBase {...props}>
    <CreatePage title="Créer un badge">
      <BadgeForm />
    </CreatePage>
  </CreateBase>
);

export default BadgeCreate;

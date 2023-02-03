import React from 'react';
import { EditBase, linkToRecord, useTranslate } from 'react-admin';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import BadgeForm from './BadgeForm';
import EditPage from '../../layout/EditPage';
import EditTitle from './BadgeTitle';

const BadgeEdit = (props) => {
  const { identity } = useCheckAuthenticated();
  const translate = useTranslate();
  if (!identity?.id) return null;
  return (
    <EditBase redirect="show" {...props}>
      <EditPage
        title={<EditTitle />}
        actions={{ [linkToRecord('/Event', props.id, 'show')]: translate('ra.action.show')}}
      >
        <BadgeForm />
      </EditPage>
    </EditBase>
  );
};

export default BadgeEdit;

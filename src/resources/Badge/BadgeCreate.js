import React, { useCallback } from 'react';
import { CreateBase, useGetIdentity } from 'react-admin';
import BadgeForm from './BadgeForm';
import CreatePage from '../../layout/CreatePage';

const BadgeCreate = (props) => {
  const { identity } = useGetIdentity();
  console.log('identity', identity);
  const transform = useCallback(data => {
    console.log('transform data', identity)
    return ({ ...data, issuer: identity?.id });
  }, [identity]);
  if (!identity) return null;
  return (
    <CreateBase {...props} transform={transform}>
      <CreatePage title="Créer un badge">
        <BadgeForm />
      </CreatePage>
    </CreateBase>
  );
}

export default BadgeCreate;

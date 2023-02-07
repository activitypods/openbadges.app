import React from 'react';
import { useRecordContext } from 'react-admin';
import { ReferenceField } from '@semapps/field-components';

const RecipientField = ({ record, children }) => {
  // const record = useRecordContext();
  // TODO handle recipient of type email
  return (
    <ReferenceField record={record} reference="Actor" source="recipient.identity" link={false}>
      <ReferenceField reference="Profile" source="url" link={false}>
        {children}
      </ReferenceField>
    </ReferenceField>
  )

};

export default RecipientField;

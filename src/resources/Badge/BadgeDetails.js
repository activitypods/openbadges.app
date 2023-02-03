import React from 'react';
import { DateField, TextField, useTranslate } from 'react-admin';
import { ReferenceField } from '@semapps/field-components';
import IconsList from '../../commons/lists/IconsList';
import DurationField from '../../commons/fields/DurationField';
import FaceIcon from '@material-ui/icons/Face';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';

const BadgeDetails = (props) => {
  const translate = useTranslate();
  return (
    <IconsList {...props}>
      <ReferenceField reference="Actor" source="dc:creator" icon={<FaceIcon />} link={false}>
        <ReferenceField reference="Profile" source="url">
          <TextField source="vcard:given-name" />
        </ReferenceField>
      </ReferenceField>
      {/*<ReferenceField*/}
      {/*  reference="Format"*/}
      {/*  source="apods:hasFormat"*/}
      {/*  icon={<StarBorderIcon />}*/}
      {/*  linkType={false}*/}
      {/*>*/}
      {/*  <TextField source="rdfs:label" />*/}
      {/*</ReferenceField>*/}
      <DateField
        showTime
        source="dc:created"
        options={{ weekday: 'short', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
        icon={<EventIcon />}
      />
    </IconsList>
  );
};

export default BadgeDetails;

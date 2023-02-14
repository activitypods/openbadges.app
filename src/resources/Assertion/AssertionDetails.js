import React from 'react';
import { DateField, TextField, useTranslate } from 'react-admin';
import { ReferenceField } from '@semapps/field-components';
import IconsList from '../../commons/lists/IconsList';
import DurationField from '../../commons/fields/DurationField';
import FaceIcon from '@material-ui/icons/Face';
import EventIcon from '@material-ui/icons/Event';
import ScheduleIcon from '@material-ui/icons/Schedule';
import RecipientField from "../../commons/fields/RecipientField";

const AssertionDetails = (props) => {
  const translate = useTranslate();
  return (
    <IconsList {...props}>
      <RecipientField source="recipient" icon={<FaceIcon />}>
        <TextField source="vcard:given-name" />
      </RecipientField>
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
        source="issuedOn"
        options={{ weekday: 'short', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }}
        icon={<EventIcon />}
      />
    </IconsList>
  );
};

export default AssertionDetails;

import React from 'react';
import { DateField, TextField } from 'react-admin';
import Chip from '../../commons/Chip';
import { ReferenceField } from '@semapps/field-components';
import { makeStyles, Box } from '@material-ui/core';
import EventIcon from '@material-ui/icons/Event';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1.8,
    // color: theme.palette.primary.main,
  },
  description: {
    marginTop: 10,
    fontSize: '14px',
    '& span': {
      fontSize: '14px',
    },
    display: 'block',
    textOverflow: 'ellipsis',
    wordWrap: 'break-word',
    overflow: 'hidden',
    maxHeight: '3.6em',
  },
}));

const AssertionCard = ({ record }) => {
  const classes = useStyles();
  return (
    <>
      <ReferenceField record={record} reference="Badge" source="badge" link={false}>
        <TextField variant="h2" color="primary" source="schema:name" className={classes.title} />
      </ReferenceField>
      <Box pb={1}>
        <Chip icon={<EventIcon />}>
          <DateField
            record={record}
            source="issuedOn"
            options={{ weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' }}
            showTime
          />
        </Chip>
        <Chip icon={<FaceIcon />}>
          <ReferenceField record={record} reference="Badge" source="badge" link={false}>
            <ReferenceField reference="Actor" source="issuer" link={false}>
              <TextField source="schema:name" />
            </ReferenceField>
          </ReferenceField>
        </Chip>
      </Box>
      <ReferenceField record={record} reference="Badge" source="badge" link={false}>
        <TextField source="description" className={classes.description} />
      </ReferenceField>
    </>
  );
};

AssertionCard.defaultProps = {
  variant: 'full',
};

export default AssertionCard;

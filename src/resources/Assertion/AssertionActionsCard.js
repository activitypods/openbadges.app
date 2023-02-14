import React from 'react';
import {ReferenceField, TextField, useRecordContext} from 'react-admin';
import { makeStyles, Box, Card, Typography } from '@material-ui/core';
import DownloadButton from "../../commons/buttons/DownloadButton";

const useStyles = makeStyles((theme) => ({
  title: {
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundImage: `radial-gradient(circle at 50% 14em, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    color: 'white',
  },
  block: {
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'white',
    textAlign: 'center',
  },
  status: {
    marginTop: 8,
    color: theme.palette.primary.main,
  },
}));

const AssertionActionsCard = ({ children }) => {
  const classes = useStyles();
  const record = useRecordContext();

  return (
    <Card>
      <Box className={classes.title} p={2}>
        <ReferenceField record={record} reference="Badge" source="badge" link={false}>
          <TextField variant="h6" source="schema:name" />
        </ReferenceField>
      </Box>
      <Box className={classes.block} p={3}>
        {children}
      </Box>
      <Box className={classes.button} pb={3} pr={3} pl={3}>
        <DownloadButton variant="contained" color="primary" />
      </Box>
    </Card>
  );
};

export default AssertionActionsCard;

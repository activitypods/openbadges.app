import React, { useRef } from 'react';
import {
  Grid,
  makeStyles,
  Container,
  Box, Typography,
} from '@material-ui/core';
import {TextField, ImageField, useShowContext} from 'react-admin';
import { ReferenceField } from '@semapps/field-components';
import RecipientField from "../../commons/fields/RecipientField";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    paddingTop: 20,
    paddingBottom: 20
  },
  breadcrumbs: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  type: {
    paddingTop: 15,
    paddingBottom: 10,
  },
  title: {
    lineHeight: 1.15,
  },
  chevronIcon: {
    color: 'white',
  },
  avatar: {
    width: 250,
    height: 250,
    borderRadius: '100%',
  },
  badge: {
    width: 250,
    height: 250,
    float: 'right'
  }
}));

const AssertionHeader = () => {
  const classes = useStyles();
  const { record } = useShowContext();
  if (!record) return null;
  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <RecipientField record={record}>
              <ImageField source="vcard:photo" classes={{ image: classes.avatar }} />
            </RecipientField>
          </Grid>
          <Grid item xs={6}>
            <Box p={2}>
              <Typography align="center">
                <RecipientField record={record}>
                  <TextField source="vcard:given-name" variant="h2"  />
                </RecipientField>
                <Box p={1}>
                  A reçu le badge
                </Box>
                <ReferenceField record={record} reference="Badge" source="badge" link={false}>
                  <TextField source="schema:name" variant="h2" component="p" textAlign="center" />
                </ReferenceField>
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={3}>
            <ReferenceField record={record} reference="Badge" source="badge" link={false}>
              <ImageField source="schema:image" classes={{ image: classes.badge }} />
            </ReferenceField>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AssertionHeader;

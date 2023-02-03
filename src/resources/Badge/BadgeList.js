import React, { useState } from 'react';
import { ListBase, useTranslate } from 'react-admin';
import { Container, Grid, Hidden, useMediaQuery, AppBar, Tabs, Tab, makeStyles, Box } from '@material-ui/core';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import CardsList from '../../commons/lists/CardsList';
import BadgeCard from './BadgeCard';
import HeaderTitle from '../../layout/HeaderTitle';
import ProfileCard from '../../commons/cards/ProfileCard';
import Alert from "@material-ui/lab/Alert";
import AppIcon from '../../config/AppIcon';

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: theme.palette.grey['300'],
    boxShadow: 'none',
    zIndex: 900,
  },
  mission: {
    backgroundColor: theme.palette.primary.main,
    [theme.breakpoints.up('xs')]: {
      marginTop: 5,
    }
  }
}));

const BadgeList = (props) => {
  useCheckAuthenticated();
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const translate = useTranslate();
  return (
    <>
      <HeaderTitle
        actions={{ '/Badge/create': "Créer un badge" }}
      >
        {translate('app.page.events')}
      </HeaderTitle>
      <AppBar position="relative" className={classes.appBar}>
        <Container>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} indicatorColor="primary" textColor="primary">
            <Tab label={translate('app.tab.next_events')} />
            <Tab label={translate('app.tab.finished_events')} />
          </Tabs>
        </Container>
      </AppBar>
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            {/*<Box mb={2}>*/}
            {/*  <Alert icon={<AppIcon />} variant="filled" className={classes.mission}>*/}
            {/*    {translate('app.description_long')}*/}
            {/*  </Alert>*/}
            {/*</Box>*/}
            <ListBase perPage={1000} {...props}>
              <CardsList CardComponent={BadgeCard} link="show" />
            </ListBase>
          </Grid>
          <Hidden smDown>
            <Grid item md={4} lg={3}>
              <ProfileCard />
            </Grid>
          </Hidden>
        </Grid>
      </Container>
    </>
  );
};

export default BadgeList;

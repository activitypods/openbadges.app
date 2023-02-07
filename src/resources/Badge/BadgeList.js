import React, { useState } from 'react';
import { ListBase, useTranslate } from 'react-admin';
import { Container, Grid, Hidden, AppBar, Tabs, Tab, makeStyles } from '@material-ui/core';
import { useCheckAuthenticated } from '@semapps/auth-provider';
import { ReferenceField } from '@semapps/field-components';
import CardsList from '../../commons/lists/CardsList';
import BadgeCard from './BadgeCard';
import AssertionCard from "../Assertion/AssertionCard";
import HeaderTitle from '../../layout/HeaderTitle';
import ProfileCard from '../../commons/cards/ProfileCard';
import CardMediaField from "../../commons/fields/CardMediaField";

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
  const { identity } = useCheckAuthenticated();
  const classes = useStyles();
  const [tab, setTab] = useState(0);
  const translate = useTranslate();

  const sparqlWhere = [
    {
      type: "filter",
      expression:{
        type: "operation",
        operator: "notexists",
        args: [
          {
            type: "bgp",
            triples: [
              {
                subject: {
                  termType: "Variable",
                  value: "s1"
                },
                predicate: {
                  termType: "NamedNode",
                  value: "http://purl.org/dc/terms/creator"
                },
                "object": {
                  "termType": "NamedNode",
                  "value": identity?.id
                }
              }
            ]
          }
        ]
      }
    }
  ];

  if (!identity) return null;

  return (
    <>
      <HeaderTitle
        actions={{ '/Badge/create': "Créer un badge", '/BakedBadge/create': "Importer" }}
      >
        {translate('app.page.events')}
      </HeaderTitle>
      <AppBar position="relative" className={classes.appBar}>
        <Container>
          <Tabs value={tab} onChange={(_, v) => setTab(v)} indicatorColor="primary" textColor="primary">
            <Tab label="Badges reçus" />
            <Tab label="Badges créés" />
          </Tabs>
        </Container>
      </AppBar>
      <br />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            {tab === 0 ?
              <ListBase
                perPage={1000}
                {...props}
                resource="Assertion"
                basePath="/Assertion"
                filter={{ sparqlWhere }}
                sort={{ field: 'dc:created', order: 'DESC' }}
              >
                <CardsList
                  CardComponent={AssertionCard}
                  image={
                    <ReferenceField reference="Badge" source="badge" link={false}>
                      <CardMediaField source="schema:image" />
                    </ReferenceField>
                  }
                  link="show"
                />
              </ListBase>
              :
              <ListBase perPage={1000} {...props}>
                <CardsList
                  CardComponent={BadgeCard}
                  image={<CardMediaField source="schema:image" />}
                  link="show"
                />
              </ListBase>
            }
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

import * as React from 'react';
import { useListContext, Loading, linkToRecord, Link, DateField } from 'react-admin';
import { Card, CardMedia, CardContent, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 5,
  },
  loading: {
    height: '50vh',
  },
  details: {
    display: 'flex',
    marginBottom: 15,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
    },
  },
  content: {
    flex: '1 0 auto',
    flexShrink: 1,
    paddingTop: 10,
    paddingBottom: '16px !important',
    [theme.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
}));

const CardsList = ({ CardComponent, image, link }) => {
  const classes = useStyles();
  const { ids, data, basePath, loading } = useListContext();

  return loading ? (
    <Loading loadingPrimary="ra.page.loading" loadingSecondary="ra.message.loading" className={classes.loading} />
  ) : (
    ids.map((id) => (
      <Link key={id} to={linkToRecord(basePath, id, link)} className={classes.root}>
        <Card key={id} className={classes.details}>
          {React.cloneElement(image, { record: data[id] })}
          <CardContent className={classes.content}>
            <CardComponent record={data[id]} />
          </CardContent>
        </Card>
      </Link>
    ))
  );
};

CardsList.defaultProps = {
  link: 'show',
  image: <CardMedia />
};

export default CardsList;

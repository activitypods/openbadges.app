import React, { useRef } from 'react';
import {
  Grid,
  makeStyles,
  Container,
  Box,
  Drawer,
  useMediaQuery,
  useScrollTrigger,
  Typography,
} from '@material-ui/core';
import { TextField, useShowContext, ImageField } from 'react-admin';
import EmitButton from '../commons/buttons/EmitButton';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: 'white',
    height: 250,
    paddingTop: 15,
    // [theme.breakpoints.down('xs')]: {
    //   paddingTop: 10,
    //   paddingBottom: 0,
    //   marginBottom: 0,
    // },
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
  wrapper: {
    position: 'relative',
    paddingLeft: 220,
  },
  image: {
    marginBottom: 15,
    '& img': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '200px',
      display: 'block',
      borderRadius: 8,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      objectFit: 'cover',
      margin: '5px 0 10px 0',
      height: '200px',
      maxHeight: '15rem',
      [theme.breakpoints.down('xs')]: {
        maxHeight: '8rem',
      },
    },
  },
  drawer: {
    backgroundImage: `radial-gradient(circle at 50% 14em, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));

const HeaderShow = ({ type, details, actions }) => {
  const classes = useStyles();
  const { record } = useShowContext();
  const xs = useMediaQuery((theme) => theme.breakpoints.down('xs'), { noSsr: true });

  // Calculate header height
  const headerRef = useRef(null);
  const headerHeight = headerRef?.current?.clientHeight;

  // Trigger drawer when we pass beyond header height
  const showDrawer = useScrollTrigger({ threshold: headerHeight, disableHysteresis: true });

  return (
    <Box className={classes.root}>
      <Container ref={headerRef}>
        <Box className={classes.wrapper}>
          <ImageField source="schema:image" className={classes.image} />
          <Grid container>
            <Grid item xs={10} sm={9}>
              {type && record && record[type] && (
                <Typography variant="subtitle2" component="div" className={classes.type}>
                  {/*<ReferenceField source={type} reference="Format" link={false}>*/}
                  {/*  <ReferenceField source="skos:broader" reference="Format" link={false}>*/}
                  {/*    <TextField source="rdfs:label" variant="subtitle2" component="span" />*/}
                  {/*  </ReferenceField>*/}
                  {/*</ReferenceField>*/}
                  &nbsp;&nbsp;>&nbsp;&nbsp;
                  {/*<ReferenceField source={type} reference="Format" link={false}>*/}
                  {/*  <TextField source="rdfs:label" variant="subtitle2" component="span" />*/}
                  {/*</ReferenceField>*/}
                </Typography>
              )}
              <TextField source="schema:name" variant="h2" className={classes.title} />
            </Grid>
            <Grid item xs={2} sm={3}>
              <Box display="flex" justifyContent="flex-end" alignItems="flex-end" flexDirection={xs ? 'column' : 'row'}>
                {actions}
              </Box>
            </Grid>
          </Grid>
          <Box display={xs ? 'block' : 'flex'} pt={2} pb={2}>
            {React.cloneElement(details, { orientation: xs ? 'vertical' : 'horizontal' })}
          </Box>
        </Box>
        {xs && (
          <Box pb={3}>
            <EmitButton variant="contained" color="primary" />
          </Box>
        )}
        <Drawer anchor="bottom" open={xs && showDrawer} variant="persistent">
          <Box className={classes.drawer} pt={1} pb={1}>
            <EmitButton variant="contained" color="primary" />
          </Box>
        </Drawer>
      </Container>
    </Box>
  );
};

export default HeaderShow;

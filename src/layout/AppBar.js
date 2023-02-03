import React from 'react';
import {
  makeStyles,
  Typography,
  AppBar as MuiAppBar,
  IconButton,
  Toolbar, Container,
} from '@material-ui/core';
import { LogoutButton } from '@semapps/auth-provider';
import { Link } from 'react-router-dom';
import AppIcon from '../config/AppIcon';
import UserMenu from './UserMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main,
  },
  menuButton: {
    color: 'white',
  },
  beta: {
    top: -2,
  },
  badge: {
    top: 12,
    right: -6,
  },
  title: {
    flexGrow: 1,
    marginLeft: 4,
    '& a': {
      color: 'white',
      textDecoration: 'none',
    },
  },
}));

const AppBar = ({ title }) => {
  const classes = useStyles();
  return (
    <MuiAppBar position="sticky" className={classes.root}>
      <Toolbar>
        <Link to="/Badge">
          <IconButton edge="start" className={classes.menuButton} color="inherit">
            <AppIcon fontSize="large" />
          </IconButton>
        </Link>
        <Typography variant="h4" className={classes.title}>
          <Link to="/Badge">
            {title}
          </Link>
        </Typography>
        <UserMenu logout={<LogoutButton />} />
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;

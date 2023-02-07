import React from "react";
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 180,
    minWidth: 180,
    minHeight: 145,
    backgroundColor: theme.palette.grey['300'],
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  },
  img: {
    maxHeight: 200,
  }
}));

const CardMediaField = ({ record, source, ...rest }) => {
  const classes = useStyles();
  return (
    <CardMedia image={Array.isArray(record[source]) ? record[source][0] : record[source]} classes={classes} {...rest} />
  )
};

export default CardMediaField;

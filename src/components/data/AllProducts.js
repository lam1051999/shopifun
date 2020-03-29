import React from "react";
import Sales from "../sales/Sales";
import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import SalesOff from "../sales/SalesOff";
import Products from "../healper/Products";
import Fade from "react-reveal/Fade";

const AllProducts = () => {
  const useStyles = makeStyles(theme => ({
    root: {
      zIndex: -1
    },
    paper: {
      width: 1200,
      margin: "auto",
      marginTop: 10,
      position: "relative",
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <SalesOff />
        <Sales />
      </Paper>
      <Fade bottom>
        <Products query="" page={0} category="all" type="" sort="" />
      </Fade>
    </div>
  );
};

export default AllProducts;

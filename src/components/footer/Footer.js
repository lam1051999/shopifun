import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core";

const Footer = () => {
  const useStyles = makeStyles(theme => ({
    container: { width: "100%" },
    gridContainer: {
      width: "100%",
      padding: "0% 10%"
    },
    grid: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column"
    },
    title: {
      fontWeight: "bold",
      fontSize: "1.3em",
      flex: 1,
      minHeight: "12vh",
      fontFamily: "Fredoka One",
      color: "#ff5722"
    },
    content: {
      flex: 3,
      marginTop: "-8vh",
      fontFamily: "Fredoka One"
    },
    copy: {
      textAlign: "center",
      paddingBottom: "1em",
      fontFamily: "Fredoka One"
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container className={classes.gridContainer}>
        <Grid sm={3} className={classes.grid} item xs={6}>
          <p className={classes.title}>RETURNS & WARRANTY</p>
          <div className={classes.content}>
            <p>Returns & Exchange Policy</p>
            <p>Returns Center</p>
            <p>Warranty Policy</p>
            <p>Warranty Repair Center</p>
          </div>
        </Grid>
        <Grid sm={3} className={classes.grid} item xs={6}>
          <p className={classes.title}>CONTACT US</p>
          <div className={classes.content}>
            <p>Customer Service</p>
            <p>Order Status</p>
            <p>Trade In Your Item</p>
          </div>
        </Grid>
        <Grid sm={3} className={classes.grid} item xs={6}>
          <p className={classes.title}>COMPANY INFO</p>
          <div className={classes.content}>
            <p>About Shopifun</p>
            <p>Sell To Shopifun</p>
            <p>Our Blog</p>
            <p>Customer Review</p>
            <p>Student Discount</p>
          </div>
        </Grid>
        <Grid sm={3} className={classes.grid} item xs={6}>
          <p className={classes.title}>HELP CENTER</p>
          <div className={classes.content}>
            <p>Order Information</p>
            <p>Shipping Options</p>
            <p>Payment Options</p>
          </div>
        </Grid>
      </Grid>
      <Grid>
        <p className={classes.copy}>
          &copy; All Copyrights Are Reserved, TranLam.Inc
        </p>
      </Grid>
    </div>
  );
};

export default Footer;

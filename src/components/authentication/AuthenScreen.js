import React from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import ShipPng from "./source/shippingPng.png";
import SalesPng from "./source/salesoffPng.png";
import PayPng from "./source/paymentPng.png";
import CoinPng from "./source/coinsPng.png";
import Paper from "@material-ui/core/Paper";

const AuthenScreen = ({ children }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      display: "flex",
      flexDirection: "column",
      fontFamily: "Fredoka One",
      [theme.breakpoints.up("sm")]: {
        minHeight: "800px"
      }
    },
    endow: {
      flex: 1,
      padding: "2vw 5vw 3vw 5vw",
      background: "linear-gradient(to right,#ff5722,#ff9800)"
    },
    container: {
      flex: 15,
      padding: "3vw 5vw 3vw 5vw",
      position: "relative"
    },
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: "1.5em"
    },
    content: {
      color: "white"
    },
    form: {
      borderRadius: "1em",
      padding: "0% 2% 2% 2%",
      [theme.breakpoints.up("sm")]: {
        width: "30%",
        position: "absolute",
        right: "5vw",
        top: "-10vh"
      },
      [theme.breakpoints.down("xs")]: {
        marginBottom: "3vh"
      }
    },
    grid: {
      [theme.breakpoints.up("sm")]: {
        width: "60%"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    ultilities: {
      fontSize: "1.5em",
      fontWeight: "bold"
    },

    iconShip: {
      color: "#ff5722",
      fontSize: "5em"
    },
    iconSale: {
      color: "#d50000",
      fontSize: "5em"
    },
    iconPay: {
      color: "#827717",
      fontSize: "5em"
    },
    iconCoin: {
      color: "#66bb6a",
      fontSize: "5em"
    },
    img: {
      marginBottom: "-2vh",
      marginTop: "2vh"
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.endow}>
        <p className={classes.title} variant="h5">
          REGISTER TO GET MORE ENDOWS FROM THE WEBSITE
        </p>
        <p className={classes.content}>
          Fast , convenient and safe. Sign in quick, the deal big
        </p>
      </div>
      <div className={classes.container}>
        <Paper className={classes.form} elevation={10}>
          {children}
        </Paper>
        <Grid className={classes.grid} container>
          <Grid sm={6} xs={12} item>
            <img className={classes.img} width="25%" src={ShipPng} alt="ship" />
            <p className={classes.ultilities}>Super fast shipping</p>
            <p>
              We provide a super fast shipping service that can give those items
              to your hand in just like 2 hours
            </p>
          </Grid>
          <Grid sm={6} xs={12} item>
            <img
              className={classes.img}
              width="25%"
              src={SalesPng}
              alt="sale"
            />
            <p className={classes.ultilities}>Sales off everyday</p>
            <p>
              There are discounts everyday for customers when you use and buy
              our services
            </p>
          </Grid>
          <Grid sm={6} xs={12} item>
            <img className={classes.img} width="25%" src={PayPng} alt="pay" />
            <p className={classes.ultilities}>Easy Payment</p>
            <p>
              We cooperated with many bank so that you can use all types of
              credit card to purchase our products
            </p>
          </Grid>
          <Grid sm={6} xs={12} item>
            <img className={classes.img} width="25%" src={CoinPng} alt="coin" />
            <p className={classes.ultilities}>Coins accumulation</p>
            <p>
              Each product you buy , you will gain some coins to accumulate, you
              can use those coins to buy our products
            </p>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default AuthenScreen;

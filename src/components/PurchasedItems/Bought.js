import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";

const Bought = ({ customers, user }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      marginTop: 10
    },
    title: {
      fontFamily: "Fredoka One",
      textAlign: "center",
      color: "#ff5722",
      marginBottom: 10,
      fontSize: "2.7rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.7rem"
      }
    },
    paper: {
      [theme.breakpoints.up("sm")]: {
        width: 1200,
        margin: "auto"
      },
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    media: {
      [theme.breakpoints.up("sm")]: {
        height: 300
      },
      [theme.breakpoints.down("xs")]: {
        float: "right",
        height: "20vh",
        width: "50vw"
      }
    },
    card: {
      [theme.breakpoints.up("sm")]: {
        height: 450
      },
      [theme.breakpoints.down("xs")]: {
        height: "30vh"
      }
    },
    gridItem: {
      padding: 5
    },
    cardHeader: {
      [theme.breakpoints.up("sm")]: {
        height: 70
      },
      [theme.breakpoints.down("xs")]: {
        height: "3vh"
      }
    },
    avatar: {
      backgroundColor: red[500]
    }
  }));
  const classes = useStyles();
  const filterItems = (customers, user) => {
    const match = customers.find(
      customer => customer.username === user.username
    );
    return match ? match.itemsBought : [];
  };
  const items = filterItems(customers, user);

  return (
    <div className={classes.root}>
      <div className={classes.title}>Items You Have Bought</div>
      {!user.username && !user.jwt ? (
        <p style={{ textAlign: "center" }}>You haven't logged in yet</p>
      ) : items.length ? (
        <Fragment>
          <p style={{ textAlign: "center" }}>
            Total Money You Have Spent :{" "}
            <span style={{ fontWeight: "bold" }}>
              {items
                .map(item => item.price * item.numbers)
                .reduce((accom, money) => money + accom, 0) / 100000}{" "}
              VND
            </span>
          </p>
          <div className={classes.paper}>
            <Grid container>
              {items.map((item, index) => (
                <Grid
                  item
                  xs={12}
                  sm={3}
                  key={index}
                  className={classes.gridItem}
                >
                  <Card className={classes.card}>
                    <CardHeader
                      className={classes.cardHeader}
                      avatar={
                        <Avatar className={classes.avatar} aria-label="recipe">
                          {item.name[0]}
                        </Avatar>
                      }
                      title={item.name}
                      subheader={`${item.price / 100000} VND `}
                    />
                    <Paper elevation={5}>
                      <CardMedia
                        className={classes.media}
                        image={item.image}
                        title={item.name}
                      />
                    </Paper>
                    <CardActions disableSpacing>
                      <Typography variant="subtitle2">
                        Numbers : {item.numbers}
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </div>
        </Fragment>
      ) : (
        <p style={{ textAlign: "center" }}>You haven't bought any items yet</p>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  customers: state.customersReducer,
  user: state.sessionReducer
});
export default connect(mapStateToProps)(Bought);

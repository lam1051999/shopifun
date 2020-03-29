import React, { Fragment, useState } from "react";
import AddShoppingCartOutlinedIcon from "@material-ui/icons/AddShoppingCartOutlined";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import { addToCartLogic } from "../../redux/actions/actions";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core";

const AddButton = props => {
  const [openAlert, setOpenAlert] = useState(false);
  const useStyles = makeStyles(theme => ({
    button: {
      marginTop: "1em",
      borderRadius: "1em",
      height: "4em",
      color: "white",
      textAlign: "center",
      backgroundColor: "#ff5722"
    }
  }));
  const classes = useStyles();

  return (
    <Fragment>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        startIcon={<AddShoppingCartOutlinedIcon />}
        onClick={() => {
          if (props.user.username && props.user.jwt) {
            props.dispatch(
              addToCartLogic(
                props.user.username,
                props.item.id,
                props.item.imageMain,
                props.item.name,
                props.item.price
              )
            );
          }
          setOpenAlert(true);
        }}
      >
        ADD TO CART
      </Button>
      <Snackbar
        open={openAlert}
        autoHideDuration={1000}
        onClose={() => setOpenAlert(false)}
      >
        {props.user.username ? (
          <Alert onClose={() => setOpenAlert(false)} severity="success">
            Purchased successfully
          </Alert>
        ) : (
          <Alert onClose={() => setOpenAlert(false)} severity="error">
            You must sign in to buy it
          </Alert>
        )}
      </Snackbar>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  user: state.sessionReducer
});

export default connect(mapStateToProps)(AddButton);

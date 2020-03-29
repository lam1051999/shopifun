import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { makeStyles } from "@material-ui/core";
import Fade from "@material-ui/core/Fade";

const CartIcon = ({ listCustomers, user }) => {
  const history = useHistory();
  const useStyles = makeStyles({
    icon: {
      color: "#ff5722"
    }
  });
  const classes = useStyles();
  const countItems = (listCustomers, user) => {
    let match = listCustomers.find(
      customer =>
        customer.username === user.username &&
        customer.password === user.password
    );
    return match ? match.itemsCart.length : 0;
  };

  return (
    <Fragment>
      <Tooltip
        title="YOUR CART"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        arrow
      >
        <IconButton>
          <Badge
            className={classes.icon}
            badgeContent={countItems(listCustomers, user)}
          >
            <ShoppingCartOutlinedIcon onClick={() => history.push("/cart")} />
          </Badge>
        </IconButton>
      </Tooltip>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  listCustomers: state.customersReducer,
  user: state.sessionReducer
});
export default connect(mapStateToProps)(CartIcon);

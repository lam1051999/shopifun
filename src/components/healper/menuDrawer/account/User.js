import React, { Fragment } from "react";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
import { makeStyles } from "@material-ui/core";
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import { connect } from "react-redux";
import { logOut } from "../../../../redux/actions/actions";
import { useHistory } from "react-router-dom";
import VpnKeyOutlinedIcon from "@material-ui/icons/VpnKeyOutlined";

const User = ({ onClose, userSession, dispatch }) => {
  const history = useHistory();
  const useStyles = makeStyles(theme => ({
    icon: {
      color: "#ff5722",
      [theme.breakpoints.down("xs")]: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2)
      }
    }
  }));
  const classes = useStyles();

  return (
    <Fragment>
      <List component="div" disablePadding>
        {userSession.username && userSession.jwt ? (
          <Fragment>
            <ListItem
              button
              onClick={() => {
                onClose(true);
                history.push("/bought");
              }}
            >
              <ListItemIcon>
                <ShoppingBasketOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Your Purchase" />
            </ListItem>
            <ListItem button onClick={onClose}>
              <ListItemIcon>
                <VerifiedUserOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary={`Login as: ${userSession.username}`} />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                dispatch(logOut());
                onClose(true);
                history.push("/signin");
              }}
            >
              <ListItemIcon>
                <ExitToAppOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Sign Out" />
            </ListItem>
          </Fragment>
        ) : (
          <Fragment>
            <ListItem
              button
              onClick={() => {
                history.push("/signin");
                onClose(true);
              }}
            >
              <ListItemIcon>
                <MeetingRoomOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Sign In" />
            </ListItem>
            <ListItem
              button
              onClick={() => {
                history.push("/signup");
                onClose(true);
              }}
            >
              <ListItemIcon>
                <VpnKeyOutlinedIcon className={classes.icon} />
              </ListItemIcon>
              <ListItemText primary="Sign Up" />
            </ListItem>
          </Fragment>
        )}
      </List>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  userSession: state.sessionReducer
});
export default connect(mapStateToProps)(User);

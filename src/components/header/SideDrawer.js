import React, { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Divider from "@material-ui/core/Divider";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import WatchOutlinedIcon from "@material-ui/icons/WatchOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import SportsSoccerOutlinedIcon from "@material-ui/icons/SportsSoccerOutlined";
import { Link } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import User from "../healper/menuDrawer/account/User";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";

const SideDrawer = ({ open, onClose }) => {
  const useStyles = makeStyles(theme => ({
    icon: {
      color: "#ff5722",
      fontSize: "2em"
    }
  }));
  const [openMore, setOpenMore] = useState(false);
  const classes = useStyles();
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem button onClick={onClose} component={Link} to="/">
          <ListItemIcon>
            <StoreOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={onClose} component={Link} to="/cart">
          <ListItemIcon>
            <ShoppingCartOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Shopping Cart" />
        </ListItem>
        <ListItem button onClick={() => setOpenMore(!openMore)}>
          <ListItemIcon>
            <AccountCircle className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Your Account" />
          {openMore ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openMore} timeout="auto">
          <User onClose={onClose} />
        </Collapse>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={onClose} component={Link} to="/phones">
          <ListItemIcon>
            <PhoneIphoneIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Phones" />
        </ListItem>
        <ListItem button onClick={onClose} component={Link} to="/laptops">
          <ListItemIcon>
            <LaptopMacIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Laptops" />
        </ListItem>
        <ListItem button onClick={onClose} component={Link} to="/watches">
          <ListItemIcon>
            <WatchOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Watches" />
        </ListItem>
        <ListItem button onClick={onClose} component={Link} to="/accessories">
          <ListItemIcon>
            <HeadsetMicOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Accessories" />
        </ListItem>
        <ListItem button onClick={onClose} component={Link} to="/cameras">
          <ListItemIcon>
            <CameraAltOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Cameras" />
        </ListItem>
        <ListItem button onClick={onClose} component={Link} to="/sports">
          <ListItemIcon>
            <SportsSoccerOutlinedIcon className={classes.icon} />
          </ListItemIcon>
          <ListItemText primary="Sports" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;

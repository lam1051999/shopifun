import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import StoreOutlinedIcon from "@material-ui/icons/StoreOutlined";
import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import TabBar from "./TabBar";
import { useHistory, useLocation } from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import AccountButton from "../healper/dialog/AccountButton";
import MenuDrawer from "../healper/menuDrawer/MenuDrawer";
import CartIcon from "../healper/Purchase/CartIcon";
import SearchField from "../healper/searchField/SearchField";

const Header = () => {
  const useStyles = makeStyles(theme => ({
    grow: {
      flexGrow: 1,
      width: "100%",
      position: "sticky",
      top: 0,
      zIndex: 1000
    },
    appBar: {
      backgroundColor: "white",
      color: "#ff5722"
    },
    toolBar: {
      [theme.breakpoints.up("sm")]: {
        width: "70vw",
        margin: "auto"
      }
    },
    icon: {
      color: "#ff5722"
    },
    mainIcon: {
      fontSize: "400%",
      cursor: "pointer"
    },
    typo: {
      marginTop: "0.5em",
      fontSize: "2em",
      cursor: "pointer",
      fontFamily: "Righteous"
    },
    commonBar: {
      flexGrow: 1,
      display: "flex"
    },
    siteContainer: {
      flexGrow: 1,
      [theme.breakpoints.down("xs")]: {
        fontSize: "60%"
      }
    }
  }));
  const history = useHistory();
  const [hidden, setHidden] = useState(false);
  const location = useLocation();
  const classes = useStyles();
  useEffect(() => {
    location.pathname === "/cart" ||
    location.pathname === "/bought" ||
    location.pathname === "/signin" ||
    location.pathname === "/signup"
      ? setHidden(true)
      : setHidden(false);
  }, [location]);

  return (
    <div className={classes.grow}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar className={classes.toolBar}>
          <Hidden smUp>
            <MenuDrawer />
          </Hidden>
          <div className={classes.commonBar}>
            <div className={classes.siteContainer}>
              <Badge>
                <LocalMallOutlinedIcon
                  onClick={() => history.push("/tranlam.shop")}
                  className={classes.mainIcon}
                />
              </Badge>
              <Badge>
                <Typography
                  onClick={() => history.push("/tranlam.shop")}
                  className={classes.typo}
                >
                  Shopifun
                </Typography>
              </Badge>
            </div>
            <SearchField />
          </div>
          <Hidden xsDown>
            <Tooltip
              title="HOME"
              TransitionComponent={Fade}
              TransitionProps={{ timeout: 600 }}
              arrow
            >
              <IconButton>
                <Badge>
                  <StoreOutlinedIcon
                    onClick={() => history.push("/tranlam.shop")}
                    className={classes.icon}
                  />
                </Badge>
              </IconButton>
            </Tooltip>
            <CartIcon />
            <AccountButton />
          </Hidden>
        </Toolbar>
      </AppBar>
      <Hidden xsDown>
        <TabBar hidden={hidden} />
      </Hidden>
    </div>
  );
};

export default Header;

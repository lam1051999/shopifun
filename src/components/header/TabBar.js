import React from "react";
import Paper from "@material-ui/core/Paper";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import WatchOutlinedIcon from "@material-ui/icons/WatchOutlined";
import HeadsetMicOutlinedIcon from "@material-ui/icons/HeadsetMicOutlined";
import CameraAltOutlinedIcon from "@material-ui/icons/CameraAltOutlined";
import SportsSoccerOutlinedIcon from "@material-ui/icons/SportsSoccerOutlined";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const TabBar = ({ hidden }) => {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    container: {
      width: "70%",
      margin: "auto",
      display: "flex",
      justifyContent: "space-around"
    },
    button: {
      display: "inline-block",
      textAlign: "center",
      color: "#ff5722"
    }
  }));
  const classes = useStyles();

  return (
    <Paper className={classes.root} hidden={hidden}>
      <div className={classes.container}>
        <Button component={Link} to="/phones" className={classes.button}>
          <Badge>
            <PhoneIphoneIcon />
          </Badge>
          <Badge>
            <Typography>PHONES</Typography>
          </Badge>
        </Button>
        <Button component={Link} to="/laptops" className={classes.button}>
          <Badge>
            <LaptopMacIcon />
          </Badge>
          <Badge>
            <Typography>LAPTOPS</Typography>
          </Badge>
        </Button>
        <Button component={Link} to="/watches" className={classes.button}>
          <Badge>
            <WatchOutlinedIcon />
          </Badge>
          <Badge>
            <Typography>WATCHES</Typography>
          </Badge>
        </Button>
        <Button component={Link} to="/accessories" className={classes.button}>
          <Badge>
            <HeadsetMicOutlinedIcon />
          </Badge>
          <Badge>
            <Typography>ACCESSORIES</Typography>
          </Badge>
        </Button>
        <Button component={Link} to="/cameras" className={classes.button}>
          <Badge>
            <CameraAltOutlinedIcon />
          </Badge>
          <Badge>
            <Typography>CAMERAS</Typography>
          </Badge>
        </Button>
        <Button component={Link} to="/sports" className={classes.button}>
          <Badge>
            <SportsSoccerOutlinedIcon />
          </Badge>
          <Badge>
            <Typography>SPORTS</Typography>
          </Badge>
        </Button>
      </div>
    </Paper>
  );
};

export default TabBar;

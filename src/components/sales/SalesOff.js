import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";

const SalesOff = () => {
  const useStyles = makeStyles(theme => ({
    salesOffContainer: {
      width: "40%",
      position: "absolute",
      bottom: 0,
      left: 0,
      fontFamily: "Fredoka One",
      opacity: 0.8,
      zIndex: 1
    },
    salesOff: {
      backgroundColor: "#ff5722",
      textAlign: "center",
      color: "white",
      fontSize: 20,
      width: 200,
      display: "inline-block",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1em",
        width: "90%"
      }
    },
    timeLast: {
      display: "block",
      backgroundColor: "#ff5722",
      color: "white",
      fontSize: 25,
      textAlign: "center",
      width: 350,
      [theme.breakpoints.down("xs")]: {
        width: "100%",
        fontSize: "1em"
      }
    },
    timeContainer: {
      display: "inline-block",
      width: 87.5,
      [theme.breakpoints.down("xs")]: {
        width: "25%"
      }
    },
    number: {
      fontSize: 60,
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.25em"
      }
    }
  }));
  const classes = useStyles();
  const deadline = "May,10,2020";
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [percent, setPercent] = useState(0);
  const countDown = deadline => {
    const timeRemaining = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor(timeRemaining / 1000) % 60;
    const minutes = Math.floor(timeRemaining / (1000 * 60)) % 60;
    const hours = Math.floor(timeRemaining / (1000 * 60 * 60)) % 24;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    setTime({ ...time, days, hours, minutes, seconds });
  };
  useEffect(() => {
    const count = setInterval(() => {
      countDown(deadline);
    }, 1000);
    return () => clearInterval(count);
  }, [deadline]);

  useEffect(() => {
    const per = setTimeout(() => {
      if (percent < 50) {
        setPercent(percent => percent + 1);
      }
    }, 40);
    return () => clearTimeout(per);
  });

  return (
    <div className={classes.salesOffContainer}>
      <div className={classes.salesOff}>SALE OFF UP TO {percent}%</div>
      <div className={classes.timeLast}>
        <div className={classes.timeContainer}>
          <div className={classes.number}>{time.days}</div>
          <div>DAYS</div>
        </div>
        <div className={classes.timeContainer}>
          <div className={classes.number}>{time.hours}</div>
          <div>HS</div>
        </div>
        <div className={classes.timeContainer}>
          <div className={classes.number}>{time.minutes}</div>
          <div>MIN</div>
        </div>
        <div className={classes.timeContainer}>
          <div className={classes.number}>{time.seconds}</div>
          <div>SEC</div>
        </div>
      </div>
    </div>
  );
};

export default SalesOff;

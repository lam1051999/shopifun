import React from "react";
import Slider from "react-slick";
import { makeStyles } from "@material-ui/core";

const Sales = () => {
  const useStyles = makeStyles(theme => ({
    slides: {
      height: 450,
      [theme.breakpoints.down("xs")]: {
        height: "25vh"
      }
    },
    images: {
      width: "100%"
    }
  }));
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    accessibility: false,
    arrows: false
  };
  return (
    <Slider {...settings}>
      <div className={classes.slides}>
        <img
          alt="iphone"
          className={classes.images}
          src="https://www.telia.no/contentassets/fd5b1bf619604fc49609acf31a7ae910/fb-1200x628.png"
        ></img>
      </div>
      <div className={classes.slides}>
        <img
          alt="iphone"
          className={classes.images}
          src="https://images.pexels.com/photos/3571093/pexels-photo-3571093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ></img>
      </div>
      <div className={classes.slides}>
        <img
          alt="iphone"
          className={classes.images}
          src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.15752-9/88004647_272184810415524_2478777801507864576_n.png?_nc_cat=107&_nc_sid=b96e70&_nc_ohc=b_YP_TtvLcEAX_Ry4td&_nc_ht=scontent.fhan2-3.fna&oh=7f7cafe82835d75675059946adb17267&oe=5EEFC509"
        ></img>
      </div>
      <div className={classes.slides}>
        <img
          alt="iphone"
          className={classes.images}
          src="https://scontent.fhan2-4.fna.fbcdn.net/v/t1.15752-9/87547967_492369754783872_656088883330547712_n.png?_nc_cat=103&_nc_sid=b96e70&_nc_ohc=WadQw1TVWnoAX-zBKB8&_nc_ht=scontent.fhan2-4.fna&oh=35c315120956817ac8d69026e843166e&oe=5EEB417B"
        ></img>
      </div>
    </Slider>
  );
};

export default Sales;

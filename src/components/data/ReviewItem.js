import React, { useState, useEffect, Fragment } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import axios from "axios";
import { useParams } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import Picture from "../healper/picture/Picture";
import LocalShippingOutlinedIcon from "@material-ui/icons/LocalShippingOutlined";
import AddButton from "../healper/AddButton";

const ReviewItem = () => {
  const discount = Math.random() * 30 + 1;
  const [item, setItem] = useState({
    id: "",
    name: "",
    price: 0,
    description: "",
    lastUpdate: "",
    imageMain: "",
    imageDetailProduct: {},
    category: {},
    productDates: ""
  });
  const { id } = useParams();
  const useStyles = makeStyles(theme => ({
    root: {
      width: 1200,
      minHeight: 700,
      margin: "auto",
      marginTop: 10,
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    container: {
      display: "flex",
      padding: "1em",
      [theme.breakpoints.down("xs")]: {
        flexDirection: "column"
      }
    },
    details: {
      flex: 1,
      paddingLeft: "2em",
      paddingRight: "2em",
      fontFamily: "Open Sans",
      [theme.breakpoints.down("xs")]: {
        marginTop: "1em"
      }
    }
  }));
  const classes = useStyles();
  useEffect(() => {
    axios
      .get(`https://shoptifun.appspot.com/api/public/products?id=${id}`)
      .then(response => {
        let x = response.data;
        setItem({
          id: x.id,
          name: x.name,
          price: x.price,
          description: x.description,
          lastUpdate: x.lastUpdate,
          imageMain: x.imageMain,
          imageDetailProduct: x.imageDetailProduct,
          category: x.category,
          productDates: x.productDates
        });
      })
      .catch(err => console.log(err));
  }, [id]);

  return (
    <Fragment>
      <Paper className={classes.root}>
        <div className={classes.container}>
          <Picture item={item} />
          <div className={classes.details}>
            <Typography
              style={{
                fontWeight: "bold",
                fontSize: "1.5em",
                color: "#ff5722",
                fontFamily: "Open Sans"
              }}
            >
              {item.name}
            </Typography>
            <p style={{ fontWeight: "bold" }}>
              Price: &nbsp;&nbsp;
              {item.price / 100000} VND &nbsp; &nbsp;
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {(((item.price / 100000) * (100 - discount)) / 100).toFixed(0)}{" "}
                VND
              </span>
              &nbsp;&nbsp;
              <Chip
                label={`${discount.toFixed(0)}% OFF`}
                style={{ backgroundColor: "#ff5722", color: "white" }}
              />
            </p>
            <p style={{ fontWeight: "bold" }}>
              Shipping:&nbsp;&nbsp;{" "}
              <Chip
                icon={<LocalShippingOutlinedIcon style={{ color: "white" }} />}
                label="Free shipping"
                style={{ backgroundColor: "#ff5722", color: "white" }}
              />
            </p>
            <AddButton item={item} />
          </div>
        </div>
      </Paper>
    </Fragment>
  );
};

export default ReviewItem;

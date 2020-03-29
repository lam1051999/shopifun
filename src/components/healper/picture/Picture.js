import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import ReactImageMagnify from "react-image-magnify";

const Picture = ({ item }) => {
  const [src, setSrc] = useState("");
  const useStyles = makeStyles(theme => ({
    images: {
      flex: 1
    },
    mainImage: {
      width: "100%",
      maxHeight: "500px",
      border: "0.3em solid rgba(255,152,0,0.5)",
      borderRadius: "0.5em",
      [theme.breakpoints.down("xs")]: {
        maxHeight: "50vh"
      }
    },
    childImage: {
      border: "0.7px solid lightgray",
      borderRadius: "1em",
      width: "100%",
      textAlign: "center"
    },
    imgc: {
      "&:hover": {
        border: "0.1em solid rgba(255,152,0,0.5)",
        borderRadius: "0.2em"
      }
    }
  }));
  const classes = useStyles();
  useEffect(() => {
    setSrc(item.imageMain);
  }, [item]);

  return (
    <div className={classes.images}>
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: item.name,
            isFluidWidth: true,
            src: src
          },
          largeImage: {
            src: src,
            width: 1200,
            height: 1200
          },
          imageClassName: classes.mainImage
        }}
      />
      <div className={classes.childImage}>
        {Object.keys(item.imageDetailProduct)
          .slice(1, 7)
          .map((img, index) =>
            item.imageDetailProduct[img] ? (
              <img
                key={index}
                src={item.imageDetailProduct[img]}
                width="14%"
                alt={index}
                style={{ padding: "0.2em", cursor: "pointer" }}
                onClick={() => setSrc(item.imageDetailProduct[img])}
                className={classes.imgc}
              ></img>
            ) : null
          )}
      </div>
    </div>
  );
};

export default Picture;

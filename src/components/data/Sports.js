import React from "react";
import Products from "../healper/Products";
import Fade from "react-reveal/Fade";

const Sports = () => {
  return (
    <Fade bottom>
      <Products query="" page={0} category="Sports" type="" sort="" />
    </Fade>
  );
};

export default Sports;

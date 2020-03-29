import React from "react";
import Products from "../healper/Products";
import Fade from "react-reveal/Fade";

const Laptops = () => {
  return (
    <Fade bottom>
      <Products query="" page={0} category="Laptops" type="" sort="" />
    </Fade>
  );
};

export default Laptops;

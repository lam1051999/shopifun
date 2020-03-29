import React from "react";
import Products from "../healper/Products";
import Fade from "react-reveal/Fade";

const Accessories = () => {
  return (
    <Fade bottom>
      <Products query="" page={0} category="Accessories" type="" sort="" />
    </Fade>
  );
};

export default Accessories;

import React from "react";
import Products from "../healper/Products";
import Fade from "react-reveal/Fade";

const Phones = () => {
  return (
    <Fade bottom>
      <Products query="" page={0} category="Phones" type="" sort="" />
    </Fade>
  );
};

export default Phones;

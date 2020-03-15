import React from "react";
import Products from "../healper/Products";
import Fade from "react-reveal/Fade";

const Watches = () => {
  return (
    <Fade bottom>
      <Products query="" page={0} category="Watches" type="" sort="" />
    </Fade>
  );
};

export default Watches;

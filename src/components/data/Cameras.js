import React from "react";
import Products from "../healper/Products";
import Fade from "react-reveal/Fade";

const Cameras = () => {
  return (
    <Fade bottom>
      <Products query="" page={0} category="Cameras" type="" sort="" />
    </Fade>
  );
};

export default Cameras;

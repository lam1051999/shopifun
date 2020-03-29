import React from "react";
import Fade from "react-reveal/Fade";
import { useParams } from "react-router-dom";
import Products from "../Products";

const SearchResult = () => {
  const { keyword } = useParams();

  return (
    <Fade bottom>
      <Products query={keyword} page={0} category="all" type="" sort="" />
    </Fade>
  );
};

export default SearchResult;

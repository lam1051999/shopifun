import React, { Fragment } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

const Select = () => {
  return (
    <Fragment>
      <InputLabel id="type">Type</InputLabel>
      <Select
        labelId="type"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="price">Price</MenuItem>
        <MenuItem value="name">Twenty</MenuItem>
      </Select>
      <InputLabel id="sort">Sort</InputLabel>
      <Select
        labelId="sort"
        id="demo-simple-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="desc">Descend</MenuItem>
        <MenuItem value="asc">Ascend</MenuItem>
      </Select>
    </Fragment>
  );
};

export default Select;

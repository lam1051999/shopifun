import React, { useState, Fragment } from "react";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import SideDrawer from "../../header/SideDrawer";

const MenuDrawer = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <Fragment>
      <IconButton onClick={() => setOpenDrawer(true)}>
        <MenuIcon style={{ color: "#ff5722" }} />
      </IconButton>
      <SideDrawer open={openDrawer} onClose={() => setOpenDrawer(false)} />
    </Fragment>
  );
};

export default MenuDrawer;

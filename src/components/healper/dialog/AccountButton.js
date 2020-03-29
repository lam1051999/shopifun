import React, { useState, Fragment } from "react";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import User from "../menuDrawer/account/User";

const AccountButton = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  return (
    <Fragment>
      <Tooltip
        title="YOUR ACCOUNT"
        TransitionComponent={Fade}
        TransitionProps={{ timeout: 600 }}
        arrow
      >
        <IconButton onClick={e => setAnchorEl(e.currentTarget)}>
          <Badge>
            <AccountCircle style={{ color: "#ff5722" }} />
          </Badge>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }}
      >
        <div>
          <User onClose={() => setAnchorEl(null)} />
        </div>
      </Menu>
    </Fragment>
  );
};

export default AccountButton;

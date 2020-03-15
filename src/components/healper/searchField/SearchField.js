import React, { useState } from "react";
import { makeStyles, fade } from "@material-ui/core";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";

const SearchField = props => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const useStyles = makeStyles(theme => ({
    searchIcon: {
      width: theme.spacing(7),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    },
    searchWrap: {
      margin: "auto",
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.error.main, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.error.main, 0.25)
      },
      height: "70%"
    },
    inputBase: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "5vw",
        "&:focus": {
          width: "10vw"
        }
      },
      [theme.breakpoints.down("xs")]: {
        width: 0,
        "&:focus": {
          width: "25vw"
        }
      }
    },
    inputRoot: {
      color: "inherit"
    }
  }));
  const classes = useStyles();

  return (
    <div className={classes.searchWrap}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <InputBase
        classes={{
          input: classes.inputBase,
          root: classes.inputRoot
        }}
        placeholder="Search..."
        inputProps={{ "aria-label": "search" }}
        value={search}
        onChange={event => {
          setSearch(event.target.value);
        }}
        onKeyDown={event => {
          if (event.key === "Enter") {
            history.push(`/searchresult/${search}`);
            setSearch("");
          }
        }}
      />
    </div>
  );
};

export default SearchField;

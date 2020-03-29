import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Button from "@material-ui/core/Button";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import IconButton from "@material-ui/core/IconButton";
import AuthenScreen from "./AuthenScreen";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { signIn } from "../../redux/actions/actions";

const SignIn = ({ dispatch }) => {
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showUsernameHelper, setShowUsernameHelper] = useState(false);
  const [showPasswordHelper, setShowPasswordHelper] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const useStyles = makeStyles(theme => ({
    field: {
      borderRadius: "2em"
    },
    textField: {
      marginTop: "1.5em"
    },
    button: {
      marginTop: "1em",
      borderRadius: "2em",
      height: "3.5em",
      background: "linear-gradient(to right,#ff5722,#ff9800)",
      color: "white"
    },
    options: {
      textAlign: "center"
    }
  }));
  const classes = useStyles();

  return (
    <AuthenScreen>
      <div>
        <p style={{ fontWeight: "bold", fontSize: "2em" }}>Sign in</p>
        <p>Sign in to buy products</p>
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Username"
          fullWidth
          onChange={e => setUsername(e.target.value)}
          onBlur={() => {
            if (!username) {
              setShowUsernameHelper(true);
              setErrorUsername(true);
            }
          }}
          error={errorUsername && !username}
          helperText={
            showUsernameHelper && !username ? (
              <Fragment>You must fill in this field</Fragment>
            ) : null
          }
          InputProps={{
            className: classes.field,
            endAdornment: (
              <InputAdornment>
                <IconButton disabled>
                  <AccountCircleOutlinedIcon />
                </IconButton>
              </InputAdornment>
            )
          }}
        />
        <TextField
          className={classes.textField}
          variant="outlined"
          label="Password"
          fullWidth
          onChange={e => setPassword(e.target.value)}
          onBlur={() => {
            if (!password) {
              setShowPasswordHelper(true);
              setErrorPassword(true);
            }
          }}
          error={errorPassword && !password}
          helperText={
            showPasswordHelper && !password ? (
              <Fragment>You must fill in this field</Fragment>
            ) : null
          }
          InputProps={{
            className: classes.field,
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => setShowPassword(showPassword => !showPassword)}
                >
                  {showPassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </IconButton>
              </InputAdornment>
            ),
            type: showPassword ? "text" : "password"
          }}
        />
        <Button
          className={classes.button}
          size="large"
          fullWidth
          variant="contained"
          onClick={() => {
            if (username && password) {
              dispatch(signIn(username, password, history));
            }
          }}
        >
          SIGN IN
        </Button>
      </div>
      <div className={classes.options}>
        <p>
          Forgot password? <Button color="secondary">Click here</Button>
        </p>
        <p>
          Don't have an account?
          <Button color="secondary" onClick={() => history.push("/signup")}>
            Sign up here
          </Button>
        </p>
      </div>
    </AuthenScreen>
  );
};

export default connect()(SignIn);

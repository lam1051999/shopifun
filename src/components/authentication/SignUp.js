import React, { useState, Fragment } from "react";
import AuthenScreen from "./AuthenScreen";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@material-ui/icons/VisibilityOffOutlined";
import IconButton from "@material-ui/core/IconButton";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import { connect } from "react-redux";
import { signUp } from "../../redux/actions/actions";

const SignUp = ({ dispatch }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showUsernameHelper, setShowUsernameHelper] = useState(false);
  const [showPasswordHelper, setShowPasswordHelper] = useState(false);
  const [showEmailHelper, setShowEmailHelper] = useState(false);
  const [errorUsername, setErrorUsername] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
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
  const history = useHistory();

  return (
    <AuthenScreen>
      <p style={{ fontWeight: "bold", fontSize: "2em" }}>Sign up</p>
      <p>Please fill in these details</p>
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
        label="Email"
        fullWidth
        onChange={e => setEmail(e.target.value)}
        onBlur={() => {
          if (!password) {
            setShowEmailHelper(true);
            setErrorEmail(true);
          }
        }}
        error={errorEmail && !email}
        helperText={
          showEmailHelper && !email ? (
            <Fragment>You must fill in this field</Fragment>
          ) : null
        }
        InputProps={{
          className: classes.field,
          endAdornment: (
            <InputAdornment>
              <IconButton disabled>
                <EmailOutlinedIcon />
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
          if (username && password && email) {
            dispatch(signUp(username, password, email, history));
          }
        }}
      >
        SIGN UP
      </Button>
      <div className={classes.options}>
        <p>
          You've already have an account?
          <Button color="secondary" onClick={() => history.push("/signin")}>
            Sign in here
          </Button>
        </p>
      </div>
    </AuthenScreen>
  );
};

export default connect()(SignUp);

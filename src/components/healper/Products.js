import React, { Fragment, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { connect } from "react-redux";
import { addToCartLogic, fetchProducts } from "../../redux/actions/actions";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Skeleton from "@material-ui/lab/Skeleton";
import LazyLoad from "react-lazyload";
import InfiniteScroll from "react-infinite-scroll-component";
import CachedOutlinedIcon from "@material-ui/icons/CachedOutlined";
import SentimentDissatisfiedOutlinedIcon from "@material-ui/icons/SentimentDissatisfiedOutlined";
import Badge from "@material-ui/core/Badge";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation } from "react-router-dom";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const PlaceHolder = function() {
  return (
    <Grid style={{ marginTop: 10, padding: 3 }} item sm={3} xs={6}>
      <Skeleton animation="wave" variant="rect" width="100%" height="10em" />
      <Skeleton
        animation="wave"
        width="80%"
        height="2em"
        style={{ display: "inline-block" }}
      />
      <Skeleton
        animation="wave"
        variant="circle"
        width="10%"
        height="2em"
        style={{ display: "inline-block", marginLeft: "1em" }}
      />
    </Grid>
  );
};
const Products = props => {
  const history = useHistory();
  const location = useLocation();
  const [category, setCategory] = useState("");
  const [limit, setLimit] = useState(8);
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");
  const useStyles = makeStyles(theme => ({
    root: {
      width: 1200,
      margin: "auto",
      marginTop: 40,
      [theme.breakpoints.down("xs")]: {
        width: "100%"
      }
    },
    item: {
      marginTop: 10,
      padding: 3,
      position: "relative",
      bottom: 0,
      transition: "bottom 0.3s",
      "&:hover": {
        bottom: "1em"
      }
    },
    image: {
      textAlign: "center",
      cursor: "pointer",
      height: "27.5vh",
      [theme.breakpoints.up("sm")]: {
        height: 300
      }
    },
    icon: {
      color: "rgba(255, 255, 255)"
    },
    moreIcon: { marginRight: theme.spacing(1) },
    fab: {
      display: "flex",
      margin: "auto",
      marginTop: 10
    },
    loader: {
      fontSize: "1.5em",
      fontWeight: "bold",
      fontFamily: "Fredoka One",
      color: "#ff5722"
    },
    loaderIcon: {
      fontSize: "2em",
      color: "#ff5722"
    },
    category: {
      fontFamily: "Righteous",
      fontSize: "2em",
      color: "#ff5722",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.5em"
      }
    },
    formControl: {
      minWidth: "300px"
    }
  }));
  const classes = useStyles();
  const [openAlert, setOpenAlert] = useState(false);
  useEffect(() => {
    props.dispatch(
      fetchProducts(props.query, props.page, limit, props.category, type, sort)
    );
  }, [limit, props.query, type, sort]);
  useEffect(() => {
    switch (location.pathname) {
      case "/":
        return setCategory("All products");
      case "/phones":
        return setCategory("Phones");
      case "/laptops":
        return setCategory("Laptops");
      case "/watches":
        return setCategory("Watches");
      case "/accessories":
        return setCategory("Accessories");
      case "/cameras":
        return setCategory("Cameras");
      case "/sports":
        return setCategory("Sport Items");
      default:
        return setCategory(props.query);
    }
  }, [location]);

  return (
    <Fragment>
      <div className={classes.root}>
        <p className={classes.category}>CATEGORY: {category}</p>
        <Grid
          container
          style={{
            border: "1px solid rgba(255,152,0,0.2)",
            padding: "0.5em",
            borderRadius: "0.5em"
          }}
        >
          <Grid
            style={{
              fontFamily: "righteous",
              fontSize: "1.5em",
              color: "#ff5722"
            }}
            item
            sm={12}
          >
            Sort Menu
          </Grid>
          <Grid item style={{ textAlign: "center" }} sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="type">TYPE</InputLabel>
              <Select
                labelId="type"
                id="demo-simple-select"
                value={type}
                onChange={event => setType(event.target.value)}
              >
                <MenuItem value="price">Price</MenuItem>
                <MenuItem value="name">Name</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item style={{ textAlign: "center" }} sm={4} xs={12}>
            <FormControl className={classes.formControl}>
              <InputLabel id="sort">SORT</InputLabel>
              <Select
                labelId="sort"
                id="demo-simple-select"
                value={sort}
                onChange={event => setSort(event.target.value)}
              >
                <MenuItem value="desc">Descend</MenuItem>
                <MenuItem value="asc">Ascend</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item style={{ textAlign: "center" }} sm={4} xs={12}>
            <Button
              variant="outlined"
              style={{ marginTop: "1em" }}
              color="primary"
              onClick={() => {
                setType("");
                setSort("");
              }}
            >
              RESET ALL SORT
            </Button>
          </Grid>
        </Grid>
        <InfiniteScroll
          dataLength={props.data.data.length}
          next={() => setLimit(limit => limit + 8)}
          hasMore={!Boolean(props.data.data.length % 8)}
          loader={
            <div style={{ textAlign: "center" }}>
              <Badge color="secondary">
                <CachedOutlinedIcon className={classes.loaderIcon} />
              </Badge>
              <Badge color="secondary">
                <Typography className={classes.loader}>Loading...</Typography>
              </Badge>
            </div>
          }
          endMessage={
            <div style={{ textAlign: "center" }}>
              <Badge color="secondary">
                <SentimentDissatisfiedOutlinedIcon
                  className={classes.loaderIcon}
                />
              </Badge>
              <Badge color="secondary">
                <Typography className={classes.loader}>
                  There is no products left
                </Typography>
              </Badge>
            </div>
          }
        >
          <Grid container>
            {props.data.data.map(item => (
              <LazyLoad once={true} key={item.id} placeholder={<PlaceHolder />}>
                <Grid className={classes.item} key={item.id} item sm={3} xs={6}>
                  <GridListTile component="div">
                    <div
                      className={classes.image}
                      onClick={() => history.push(`/product/${item.id}`)}
                    >
                      <img src={item.imageMain} width="100%" alt={item.name} />
                    </div>
                    <GridListTileBar
                      style={{
                        background: "linear-gradient(to right,#ff5722,#ff9800)",
                        opacity: 0.8
                      }}
                      title={item.name}
                      subtitle={
                        <div>
                          <div>Prices: {item.price / 100000} VND</div>
                        </div>
                      }
                      actionIcon={
                        <Tooltip
                          title="ADD TO CART"
                          TransitionComponent={Fade}
                          TransitionProps={{ timeout: 600 }}
                          arrow
                        >
                          <IconButton
                            onClick={() => {
                              if (props.user.username && props.user.jwt) {
                                props.dispatch(
                                  addToCartLogic(
                                    props.user.username,

                                    item.id,
                                    item.imageMain,
                                    item.name,
                                    item.price
                                  )
                                );
                              } else {
                                history.push("/signin");
                              }
                              setOpenAlert(true);
                            }}
                            aria-label={`info about ${item.name}`}
                            className={classes.icon}
                          >
                            <ShoppingCartOutlinedIcon />
                          </IconButton>
                        </Tooltip>
                      }
                    />
                  </GridListTile>
                </Grid>
              </LazyLoad>
            ))}
          </Grid>
        </InfiniteScroll>
      </div>
      <Snackbar
        open={openAlert}
        autoHideDuration={1000}
        onClose={() => setOpenAlert(false)}
      >
        {props.user.username && props.user.jwt ? (
          <Alert onClose={() => setOpenAlert(false)} severity="success">
            Purchased successfully
          </Alert>
        ) : (
          <Alert onClose={() => setOpenAlert(false)} severity="error">
            You must sign in to buy it
          </Alert>
        )}
      </Snackbar>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  user: state.sessionReducer,
  data: state.dataReducer
});

export default connect(mapStateToProps)(Products);

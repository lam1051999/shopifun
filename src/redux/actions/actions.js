import axios from "axios";

export const actionList = {
  REQUEST_ALL_PRODUCT: "REQUEST_ALL_PRODUCT",
  RECEIVE_ALL_PRODUCT: "RECEIVE_ALL_PRODUCT",
  LOG_IN: "LOG_IN",
  LOG_OUT: "LOG_OUT",
  UPDATE_CART: "UPDATE_CART",
  BOUGHT: "BOUGHT",
  REQUEST_DATA: "REQUEST_DATA",
  RECEIVE_DATA: "RECEIVE_DATA"
};

//log in
export const logIn = (username, jwt) => ({
  type: actionList.LOG_IN,
  username,
  jwt
});
export const logOut = () => ({
  type: actionList.LOG_OUT
});

//update cart
export const updateCart = newState => ({
  type: actionList.UPDATE_CART,
  newState: [...newState]
});
export const addToCartLogic = (username, itemid, image, name, price) => {
  return (dispatch, getState) => {
    let newState = [...getState().customersReducer];
    let matchUser = newState.find(user => user.username === username);
    if (matchUser) {
      let matchIndex = newState.findIndex(user => user.username === username);
      let user = {};
      let newItemsCart = [...matchUser.itemsCart];
      let matchedItemIndex = newItemsCart.findIndex(
        item => item.itemid === itemid
      );
      let nextItem = {};
      if (matchedItemIndex !== -1) {
        let matchedItem = newItemsCart.find(item => item.itemid === itemid);
        nextItem = { ...matchedItem, numbers: matchedItem.numbers + 1 };
        newItemsCart.splice(matchedItemIndex, 1);
        newItemsCart.splice(matchedItemIndex, 0, nextItem);
        user = { ...matchUser, itemsCart: [...newItemsCart] };
        newState.splice(matchIndex, 1);
        newState.splice(matchIndex, 0, user);
      } else {
        newItemsCart.push({
          itemid: itemid,
          image: image,
          name: name,
          price: price,
          numbers: 1
        });
        user = { ...matchUser, itemsCart: [...newItemsCart] };
        newState.splice(matchIndex, 1);
        newState.splice(matchIndex, 0, user);
      }
    } else {
      newState = [
        ...getState().customersReducer,
        {
          username: username,

          itemsCart: [
            {
              itemid: itemid,
              image: image,
              name: name,
              price: price,
              numbers: 1
            }
          ],
          itemsBought: []
        }
      ];
    }
    dispatch(updateCart(newState));
  };
};
export const decreaseLogic = (username, itemid) => {
  return (dispatch, getState) => {
    let newState = [...getState().customersReducer];
    let match = newState.find(customer => customer.username === username);
    let matchIndex = newState.findIndex(
      customer => customer.username === username
    );
    let matchItem = match.itemsCart.find(item => item.itemid === itemid);
    let matchItemIndex = match.itemsCart.findIndex(
      item => item.itemid === itemid
    );
    if (matchItem.numbers > 1) {
      let newItem = { ...matchItem, numbers: matchItem.numbers - 1 };
      match.itemsCart.splice(matchItemIndex, 1);
      match.itemsCart.splice(matchItemIndex, 0, newItem);
    } else {
      match.itemsCart.splice(matchItemIndex, 1);
    }
    newState.splice(matchIndex, 1);
    newState.splice(matchIndex, 0, match);
    dispatch(updateCart(newState));
  };
};
export const increaseLogic = (username, itemid) => {
  return (dispatch, getState) => {
    let newState = [...getState().customersReducer];
    let match = newState.find(customer => customer.username === username);
    let matchIndex = newState.findIndex(
      customer => customer.username === username
    );
    let matchItem = match.itemsCart.find(item => item.itemid === itemid);
    let matchItemIndex = match.itemsCart.findIndex(
      item => item.itemid === itemid
    );
    let newItem = { ...matchItem, numbers: matchItem.numbers + 1 };
    match.itemsCart.splice(matchItemIndex, 1);
    match.itemsCart.splice(matchItemIndex, 0, newItem);
    newState.splice(matchIndex, 1);
    newState.splice(matchIndex, 0, match);
    dispatch(updateCart(newState));
  };
};
export const confirmBought = (username, itemid) => {
  return (dispatch, getState) => {
    let newState = [...getState().customersReducer];
    let match = newState.find(customer => customer.username === username);
    let matchIndex = newState.findIndex(
      customer => customer.username === username
    );
    let matchItem = match.itemsCart.find(item => item.itemid === itemid);
    let matchItemIndex = match.itemsCart.findIndex(
      item => item.itemid === itemid
    );
    match.itemsCart.splice(matchItemIndex, 1);
    let matchItemBought = match.itemsBought.find(
      item => item.itemid === itemid
    );
    let matchItemBoughtIndex = match.itemsBought.find(
      item => item.itemid === itemid
    );
    if (matchItemBought) {
      let newItemBought = {
        ...matchItemBought,
        numbers: matchItemBought.numbers + matchItem.numbers
      };
      match.itemsBought.splice(matchItemBoughtIndex, 1);
      match.itemsBought.splice(matchItemBoughtIndex, 0, newItemBought);
    } else {
      match.itemsBought.push(matchItem);
    }
    newState.splice(matchIndex, 1);
    newState.splice(matchIndex, 0, match);
    dispatch(updateCart(newState));
  };
};
//authentication

export const signUp = (username, password, email, history) => {
  return dispatch => {
    return axios({
      method: "post",
      url: "https://shoptifun.appspot.com/api/public/signup",
      data: {
        username: username,
        password: password,
        userDetails: { email: email }
      }
    })
      .then(response => {
        history.push("/signin");
        alert("Sign up successfully");
      })
      .catch(err =>
        alert("Sign up failed , you enter the wrong username or email")
      );
  };
};

export const signIn = (username, password, history) => {
  return dispatch => {
    return axios({
      method: "post",
      url: "https://shoptifun.appspot.com/authenticate",
      data: {
        username: username,
        password: password
      }
    })
      .then(response => {
        dispatch(logIn(response.data.username, response.data.jwtToken));
        alert("Sign in successfully");
        history.push("/");
      })
      .catch(err => alert("Sign in failed , you enter the wrong username"));
  };
};
//fetch data
export const requestData = () => ({
  type: actionList.REQUEST_DATA
});
export const receiveData = data => ({
  type: actionList.RECEIVE_DATA,
  data: data
});
export const fetchProducts = (query, page, size, category, type, sort) => {
  return dispatch => {
    dispatch(requestData());
    return axios
      .get(
        `https://shoptifun.appspot.com/api/public/products/search?query=${query}&page=${page}&size=${size}&category=${category}&type=${type}&sort=${sort}`
      )
      .then(response => {
        dispatch(receiveData(response.data.content));
      })
      .catch(err => console.log(err));
  };
};

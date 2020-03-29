import { actionList } from "../actions/actions";

//customers
const customersInitialState = [];

export const customersReducer = (state = customersInitialState, action) => {
  switch (action.type) {
    case actionList.UPDATE_CART:
      return [...action.newState];
    default:
      return state;
  }
};
//session
const sessionInitialState = { username: "", jwt: "" };

export const sessionReducer = (state = sessionInitialState, action) => {
  switch (action.type) {
    case actionList.LOG_IN:
      return { username: action.username, jwt: action.jwt };
    case actionList.LOG_OUT:
      return sessionInitialState;
    default:
      return state;
  }
};
//fetchData
const dataInitialState = {
  isFetching: true,
  data: []
};

export const dataReducer = (state = dataInitialState, action) => {
  switch (action.type) {
    case actionList.REQUEST_DATA:
      return { ...state, isFetching: true };
    case actionList.RECEIVE_DATA:
      return { ...state, isFetching: false, data: [...action.data] };
    default:
      return state;
  }
};

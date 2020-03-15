import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  customersReducer,
  sessionReducer,
  dataReducer
} from "../reducers/reducers";

const saver = store => next => action => {
  next(action);
  localStorage.setItem("redux-store", JSON.stringify(store.getState()));
};
const reducer = combineReducers({
  customersReducer,
  sessionReducer,
  dataReducer
});
const store = createStore(
  reducer,
  localStorage.getItem("redux-store")
    ? JSON.parse(localStorage.getItem("redux-store"))
    : {},
  applyMiddleware(thunk, saver)
);

export default store;

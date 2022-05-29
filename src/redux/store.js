import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import dataReducer from "./reducers/data-reducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  data: dataReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;

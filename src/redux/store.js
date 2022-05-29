import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Reducers
import dataReducer from "./reducers/data-reducer";
import formReducer from './reducers/form-reducer';
import UIReducer from "./reducers/ui-reducer";

const initialState = {};

const middleware = [thunk];

const reducers = combineReducers({
  data: dataReducer,
  userForm: formReducer,
  UI: UIReducer,
});

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(...middleware))
);

export default store;

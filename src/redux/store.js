import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import useReducer from "./reducer";
const rootReducer = combineReducers({ useReducer });
export const Store = createStore(rootReducer, applyMiddleware(thunk));

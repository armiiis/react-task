import thunk from "redux-thunk";
import reducers from "./reducers/index";
import {createStore, applyMiddleware} from "redux";

export default createStore(reducers, applyMiddleware(thunk));
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// want to interact w/ dev tools inside browser ==> 'devToolsEnhancer'
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./reducers/reducer";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;

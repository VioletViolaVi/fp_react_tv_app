import { createStore } from "redux";
// want to interact w/ dev tools inside browser ==> 'devToolsEnhancer
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./reducers/reducer";

const store = createStore(reducer, devToolsEnhancer());

export default store;

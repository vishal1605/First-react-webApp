import { createStore } from "redux";
import rootReducer from "./allReducer/RootTask";
// import taskReducer from "./redux-tutorial/allReducer/TaskReducer";


const store = createStore(
    rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


export default store;
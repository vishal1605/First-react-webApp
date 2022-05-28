import { combineReducers } from "redux";
import taskReducer from "./TaskReducer";

const rootReducer = combineReducers(
    {
        allTasks:taskReducer
    }
);

export default rootReducer;
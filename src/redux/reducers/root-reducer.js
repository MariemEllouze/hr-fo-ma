import {combineReducers} from "redux";
import posteReducer from "./posteReducer";
const rootReducer=combineReducers({
    data:posteReducer
}) ;
export default rootReducer ;

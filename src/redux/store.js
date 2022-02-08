import { createStore ,applyMiddleware } from "redux";
import logger from 'redux-logger';
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers /root-reducer" ;
const middlewares = [reduxThunk];
 
if (process.env.NODE_ENV === `development`) {
 
 
  applyMiddleware(logger) ;
}
 
const store = createStore(rootReducer,applyMiddleware(...middlewares))
export default store;
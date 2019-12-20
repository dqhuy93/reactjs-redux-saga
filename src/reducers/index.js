import { combineReducers } from 'redux';
import userReducer from './UserReducer';

const rootReducer = combineReducers({
  users: userReducer
});

export default rootReducer;

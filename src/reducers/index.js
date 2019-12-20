import { combineReducers } from 'redux';
import postReducer from './PostReducer';
import uiReducer from './UiReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  ui: uiReducer
});

export default rootReducer;

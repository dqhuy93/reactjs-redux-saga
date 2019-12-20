import { post } from '../constants/actions';
const initialState = [];
export default (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case post.FETCH_POST_SUCCESS:
      state = payload;
      return state;
    default:
      return state;
  }
};

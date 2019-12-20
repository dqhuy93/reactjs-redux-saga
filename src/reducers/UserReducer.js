import { user } from '../constants/actions';
const initialState = [];
export default function userReducer(state = initialState, action) {
  const { payload } = action;
  switch (action.type) {
    case user.FETCH_USER_SUCCESS:
      state = payload;
      return state;
    default:
      return state;
  }
}

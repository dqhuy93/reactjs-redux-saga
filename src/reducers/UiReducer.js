import { ui } from '../constants/actions';
const initialState = {
  showLoading: false
};
export default (state = initialState, action) => {
  switch (action.type) {
    case ui.SHOW_LOADING:
      return {
        ...state,
        showLoading: true
      };
    case ui.HIDE_LOADING:
      return {
        ...state,
        showLoading: false
      };
    default:
      return state;
  }
};

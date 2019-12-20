import { ui } from '../constants/actions';

export const showLoading = payload => {
  return {
    type: ui.SHOW_LOADING,
    payload
  };
};

export const hideLoading = () => {
  return {
    type: ui.HIDE_LOADING
  };
};

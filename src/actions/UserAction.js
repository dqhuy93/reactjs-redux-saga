import { fetchApi } from '../utils/apiCaller';
import { user } from '../constants/actions';

export const fetchUserSuccess = payload => {
  return {
    type: user.FETCH_USER_SUCCESS,
    payload
  };
};

export const actGetUser = () => {
  return async dispatch => {
    return fetchApi('https://jsonplaceholder.typicode.com/users', 'GET').then(
      response => {
        dispatch(fetchUserSuccess(response.data));
      },
      error => {
        console.log(error);
      }
    );
  };
};

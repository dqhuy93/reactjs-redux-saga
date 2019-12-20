import { fetchApi } from '../utils/apiCaller';
import { post } from '../constants/actions';

export const fetchPostSuccess = payload => {
  return {
    type: post.FETCH_POST_SUCCESS,
    payload
  };
};

export const fetchPost = () => {
  return {
    type: post.FETCH_POST
  };
};

export const getPost = params => {
  return fetchApi(
    'https://jsonplaceholder.typicode.com/posts',
    'GET',
    null,
    params
  );
};

export const filterPost = params => {
  return {
    type: post.FILTER_POST,
    payload: params
  };
};

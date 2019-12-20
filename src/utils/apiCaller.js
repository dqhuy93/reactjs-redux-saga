import axios from 'axios';
import * as config from './../constants/urlAPI';

// create instance normal
const instanceNext = axios.create({
  baseURL: config.API_URL
});

/**
 * @author: huy.dang
 * @description: handle 403 response interceptor
 */
instanceNext.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response && error.response.status === 403) {
      window.location.href = process.env.REACT_APP_REDIRECT_AUTH_URL || '/';
    }

    if (error.response) {
      return Promise.reject(error.response);
    } else if (error.request) {
      return Promise.reject(error.request);
    } else {
      return Promise.reject(error.message);
    }
  }
);

/**
 * @author: huy.dang
 * @description: normal request
 * @params: {endpoint} : url api
 * @params: {method} : method
 * @params: {body} : body request
 * @params: {params} : parame on url
 * @params: {cancelToken} : cancel request token
 */
export async function fetchApi(
  endpoint,
  method = 'GET',
  body,
  params = {},
  sourceToken = null
) {
  return instanceNext({
    method: method,
    url: endpoint,
    data: body,
    params: params,
    cancelToken: sourceToken
  });
}

export async function fetchAllApi(requests = []) {
  return axios.all(requests);
}

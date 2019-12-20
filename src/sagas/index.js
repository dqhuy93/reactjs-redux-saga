import {
  fork,
  take,
  call,
  put,
  delay,
  takeLatest,
  select
} from 'redux-saga/effects';
import { post } from '../constants/actions';
import {
  getPost,
  fetchPostSuccess,
  showLoading,
  hideLoading
} from '../actions';

function* watchFetchListTaskAction() {
  while (true) {
    yield take(post.FETCH_POST);
    yield put(showLoading());

    const resp = yield call(getPost);
    yield put(fetchPostSuccess(resp.data));

    yield delay(1000);
    yield put(hideLoading());
  }
}

function* filterPost({ payload }) {
  yield delay(500);

  // lay data từ store trong saga
  const data = yield select(state => state);
  console.log(data);
  // const resp = yield call(getPost());
  // yield put(fetchPostSuccess(resp.data));
  console.log(payload);
}

function* rootSaga() {
  // none-blocking
  yield fork(watchFetchListTaskAction);
  yield takeLatest(post.FILTER_POST, filterPost);
}

export default rootSaga;

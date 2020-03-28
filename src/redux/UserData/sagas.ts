import { put, take, fork } from 'redux-saga/effects';
import Router from 'next/router';

import {
  actionTypes,
  loadDataFailure,
  loadDataSuccess,
  loadPostSuccess,
  addPostSuccess,
} from './actions';

import api from './api';

function* getPostsSaga() {
  try {
    const data = yield api.getPosts();
    yield put(loadDataSuccess(data));
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

function* getPostSaga({ id }) {
  try {
    const data = yield api.getPost(id);
    yield put(loadPostSuccess(data));
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

function* addPostSaga(formData) {
  try {
    const data = yield api.addPost(formData);
    yield put(addPostSuccess({ ...formData, ...data }));
    Router.push('/');
  } catch (err) {
    yield put(loadDataFailure(err));
  }
}

export function* watchGetPosts() {
  yield take(actionTypes.LOAD_POSTS);
  yield getPostsSaga();
}

export function* watchGetPost() {
  const { payload } = yield take(actionTypes.LOAD_POST);
  yield getPostSaga(payload);
}

export function* watchAddPost() {
  const { payload } = yield take(actionTypes.ADD_NEW_POST);
  yield addPostSaga(payload);
}

export default [fork(watchGetPosts), fork(watchGetPost), fork(watchAddPost)];

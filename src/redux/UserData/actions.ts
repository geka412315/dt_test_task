export const actionTypes = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_POST: 'LOAD_POST',
  LOAD_POST_SUCCESS: 'LOAD_POST_SUCCESS',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE: 'LOAD_DATA_FAILURE',
  ADD_NEW_POST: 'ADD_NEW_POST',
  ADD_NEW_POST_SUCCESS: 'ADD_NEW_POST_SUCCESS',
};
import { ActionCreator } from 'redux';
import { Post } from '../types';

interface GetPostsAction {
  type: typeof actionTypes.LOAD_POSTS;
}

interface GetPostAction {
  type: typeof actionTypes.LOAD_POST;
  payload: { id: number };
}

interface AddPostAction {
  type: typeof actionTypes.ADD_NEW_POST;
  payload: { title: string; body: string };
}

interface LoadDataSuccessAction {
  type: typeof actionTypes.LOAD_DATA_SUCCESS;
  payload: { data: any };
}

interface LoadDataFailureAction {
  type: typeof actionTypes.LOAD_DATA_FAILURE;
  payload: { error: any };
}

interface LoadPostSuccessAction {
  type: typeof actionTypes.LOAD_POST_SUCCESS;
  payload: { data: number };
}

interface AddPostSuccessAction {
  type: typeof actionTypes.ADD_NEW_POST_SUCCESS;
  payload: { data: number };
}

export const loadPosts: ActionCreator<GetPostsAction> = () => {
  return {
    type: actionTypes.LOAD_POSTS,
  };
};

export const loadPost: ActionCreator<GetPostAction> = (data: number) => {
  return {
    type: actionTypes.LOAD_POST,
    payload: {
      id: data,
    },
  };
};

export const addPost: ActionCreator<AddPostAction> = (payload: {
  title: string;
  body: string;
}) => {
  return {
    type: actionTypes.ADD_NEW_POST,
    payload,
  };
};

export const loadDataSuccess: ActionCreator<LoadDataSuccessAction> = (
  data: any
) => {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const loadDataFailure: ActionCreator<LoadDataFailureAction> = (
  error: any
) => {
  return {
    type: actionTypes.LOAD_DATA_FAILURE,
    payload: {
      error: error,
    },
  };
};

export const loadPostSuccess: ActionCreator<LoadPostSuccessAction> = (
  data: number
) => {
  return {
    type: actionTypes.LOAD_POST_SUCCESS,
    payload: {
      data: data,
    },
  };
};

export const addPostSuccess: ActionCreator<AddPostSuccessAction> = (
  data: number
) => {
  return {
    type: actionTypes.ADD_NEW_POST_SUCCESS,
    payload: {
      data: data,
    },
  };
};

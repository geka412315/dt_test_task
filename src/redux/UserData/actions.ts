export const actionTypes = {
  LOAD_POSTS: 'LOAD_POSTS',
  LOAD_POST: 'LOAD_POST',
  LOAD_POST_SUCCESS: 'LOAD_POST_SUCCESS',
  LOAD_DATA_SUCCESS: 'LOAD_DATA_SUCCESS',
  LOAD_DATA_FAILURE: 'LOAD_DATA_FAILURE',
  ADD_NEW_POST: 'ADD_NEW_POST',
  ADD_NEW_POST_SUCCESS: 'ADD_NEW_POST_SUCCESS',
};

export function loadPosts() {
  return {
    type: actionTypes.LOAD_POSTS,
  };
}

export function loadPost(data: number) {
  return {
    type: actionTypes.LOAD_POST,
    payload: {
      id: data,
    },
  };
}

export function addPost(payload: { title: string; body: string }) {
  return {
    type: actionTypes.ADD_NEW_POST,
    payload,
  };
}

export function loadDataSuccess(data: any) {
  return {
    type: actionTypes.LOAD_DATA_SUCCESS,
    payload: {
      data: data,
    },
  };
}

export function loadDataFailure(error: any) {
  return {
    type: actionTypes.LOAD_DATA_FAILURE,
    payload: {
      error: error,
    },
  };
}

export function loadPostSuccess(data: any) {
  return {
    type: actionTypes.LOAD_POST_SUCCESS,
    payload: {
      data: data,
    },
  };
}

export function addPostSuccess(data: any) {
  return {
    type: actionTypes.ADD_NEW_POST_SUCCESS,
    payload: {
      data: data,
    },
  };
}

import produce from 'immer';
import { State, Post } from '../../redux/types';
import { actionTypes } from './actions';

export const initialState: State = {
  placeholderData: null,
  error: null,
  postData: null,
};

const successLoadData = (draft: any, { data }: { data: Post[] }) => {
  draft.placeholderData = data.reverse();
};

const failureLoadData = (draft: any, { error }: { error: any }) => {
  draft.error = error;
};

const successLoadPost = (draft: any, { data }: { data: Post }) => {
  draft.postData = data;
};

const successAddNewPost = (
  draft: any,
  { data }: { data: { title: string; body: string; id: number } }
) => {
  draft.placeholderData = [
    {
      ...data,
      comments: [],
    },
    ...draft.placeholderData,
  ];
};

const reducer = (
  state = initialState,
  action: { type: string; payload: any }
) => {
  return produce(state, draft => {
    switch (action.type) {
      case actionTypes.LOAD_DATA_SUCCESS:
        successLoadData(draft, action.payload);
        break;
      case actionTypes.LOAD_DATA_FAILURE:
        failureLoadData(draft, action.payload);
        break;
      case actionTypes.LOAD_POST_SUCCESS:
        successLoadPost(draft, action.payload);
        break;
      case actionTypes.ADD_NEW_POST_SUCCESS:
        successAddNewPost(draft, action.payload);
        break;
    }
  });
};

export default reducer;

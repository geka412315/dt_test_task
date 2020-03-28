import produce from 'immer';
import { State } from '../../redux/types';
import { actionTypes } from './actions';

export const initialState: State = {
  placeholderData: null,
  error: null,
  postData: null,
};

const successLoadData = (draft: any, { data }: any) => {
  draft.placeholderData = data.reverse();
};

const failureLoadData = (draft: any, { error }: any) => {
  draft.error = error;
};

const successLoadPost = (draft: any, { data }: any) => {
  draft.postData = data;
};

const successAddNewPost = (draft: any, { data }: any) => {
  draft.placeholderData = [
    {
      ...data,
      comments: [],
    },
    ...draft.placeholderData,
  ];
};

const reducer = (state = initialState, action: any) => {
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

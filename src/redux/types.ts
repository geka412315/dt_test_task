import { Store } from 'redux';
import { Task } from 'redux-saga';
import { NextPageContext } from 'next';

export interface WithSagaTaskStore extends Store {
  sagaTask?: Task;
}

export interface WithReduxNextPageContext extends NextPageContext {
  store: WithSagaTaskStore;
}

export interface Post {
  title: string;
  body?: string;
  id: number | null;
  comments: null | Array<{ body?: string; postId: number; id: number }>;
}

export interface State {
  sagaTask?: Task;
  error: null | Error;
  placeholderData: Post[] | null;
  postData: Post | null;
}

import * as React from 'react';
import { NextPage } from 'next';

import { loadPosts } from '../src/redux/UserData/actions';
import Home from '../src/pages/home/index';
import { WithReduxNextPageContext } from '../src/redux/types';

const Index: NextPage = () => {
  return <Home />;
};

Index.getInitialProps = async ({
  store,
  req,
}: WithReduxNextPageContext): Promise<{ isServer: boolean }> => {
  const isServer = !!req;

  if (!store.getState().placeholderData) {
    store.dispatch(loadPosts());
  }

  return { isServer };
};

export default Index;

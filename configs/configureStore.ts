import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { Reducer, AnyAction } from 'redux';

import rootReducer, { IState } from '@reducers/index';

const isDev = process.env.NODE_ENV === 'development';

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer as Reducer<IState, AnyAction>,
    devTools: isDev,
  });
  return store;
};

export const store = createStore();

const wrapper = createWrapper(createStore);

export default wrapper;

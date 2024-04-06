import { combineReducers } from '@reduxjs/toolkit';

const reducerSlices = {}

export let rootReducer = combineReducers({ ...reducerSlices });
export default function createReducer(injectedReducers = {}) {
  rootReducer = combineReducers({ ...reducerSlices, ...injectedReducers });
  return rootReducer;
}
export type RootState = ReturnType<typeof rootReducer>;
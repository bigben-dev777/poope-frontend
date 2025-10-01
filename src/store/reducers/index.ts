import { combineReducers } from '@reduxjs/toolkit';

import auth from './auth';

const reducers = combineReducers({
  auth
});

export default reducers;

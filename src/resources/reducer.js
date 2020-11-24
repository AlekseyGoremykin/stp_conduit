import { combineReducers } from 'redux';

import post from './post/post.reducer';
import user from './user/user.reducer';

const reducers = {
  user,
  post,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;

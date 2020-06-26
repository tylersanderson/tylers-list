import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import gigsReducer from './gigs/gigs.reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['']
};

const rootReducer = combineReducers({
  user: userReducer,
  gigs: gigsReducer
});

export default persistReducer(persistConfig, rootReducer);
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducers/authReducer';
import feedReducer from './reducers/feedReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  feed: feedReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
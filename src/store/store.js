import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from '../reducers/movies';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    movies: moviesReducer
  }),
  composeEnhancers(applyMiddleware(thunk))
);

export default store;

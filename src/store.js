import { connectRoutes } from 'redux-first-router';
import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import {userIdReducer} from './reducers/userIdReducer';
import pageReducer from './reducers/pageReducer';
import authReducer from './reducers/authReducer';
import booksReducer from './reducers/booksReducer';
import ReduxThunk from 'redux-thunk';

import {
  booksFailed, booksSuccessful,
  requestBooks, fetchBooks
} from './actions/auth/bookActions'
import * as axios from 'react-dom/lib/ReactInstanceMap'

const history = createHistory()

// THE WORK:
const routesMap = {
  ALL_BOOKS: {
    path: '/',
    thunk: fetchBooks()
  },
  USER: '/user/:id',
  MY_TRADES: '/user/:id/trades',
  REGISTER: '/register',
  LOGIN: '/login',
}





const { reducer, middleware, enhancer } = connectRoutes(history, routesMap) // yes, 3 redux aspects

// and you already know how the story ends:
const composeEnhancers = process.env.NODE_ENV === 'production' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
const rootReducer = combineReducers({
  location: reducer,
  userId: userIdReducer,
  page: pageReducer,
  auth: authReducer,
  books: booksReducer
})
const middlewares = applyMiddleware(middleware, ReduxThunk)
const store = createStore(rootReducer, composeEnhancers(enhancer, middlewares))
export default store;
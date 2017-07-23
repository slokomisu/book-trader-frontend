import {
  BOOKS_FAILED,
  BOOKS_SUCCESSFUL,
  BOOKS_REQUESTED
} from '../actions/auth/bookActions'

const initialState = {
  bookList: [],
  isFetching: false,
  error: null
}

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case BOOKS_REQUESTED:
      return {...state, isFetching: true}
    case BOOKS_SUCCESSFUL:
      return {...state, bookList: action.payload.books, isFetching: false};
    case BOOKS_FAILED:
      return {...state, isFetching: false, error: action.payload.error};
    default:
      return state;
  }
}
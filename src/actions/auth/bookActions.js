import axios from 'axios';

export const BOOKS_REQUESTED = 'books/book_requested'
export const BOOKS_SUCCESSFUL = 'books/book_successful'
export const BOOKS_FAILED = 'books/book_failed';

export function requestBooks() {
  return {
    type: BOOKS_REQUESTED
  }
}

export function booksSuccessful(books) {
  console.log(books);
  return {
    type: BOOKS_SUCCESSFUL,
    payload: {
      books
    }
  }
}

export function booksFailed(error) {
  return {
    type: BOOKS_FAILED,
    payload: {
      error
    }
  }
}

export function fetchBooks() {
  return async dispatch => {
    dispatch(requestBooks())
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/books`);
      const books = response.data;
      dispatch(booksSuccessful(books));
    } catch (error) {
      dispatch(booksFailed(error))
    }

  }
}


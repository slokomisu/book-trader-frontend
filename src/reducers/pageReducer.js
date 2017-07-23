const pageReducer = (state = 'homePage', action) => {
  switch (action.type) {
    case 'ALL_BOOKS':
      return 'allBooksPage'
    case 'USER':
      return 'userPage';
    case 'MY_TRADES':
      return 'myTradesPage'
    case 'REGISTER':
      return 'registerPage'
    case 'LOGIN':
      return 'loginPage'
    case 'BOOK_DETAILS':
      return 'bookDetailsPage'
    default:
      return state;
  }
}

export default pageReducer;
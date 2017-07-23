import React from 'react';
import RegisterComponent from '../components/Auth/RegisterComponent'
import LoginComponent from '../components/Auth/LoginComponent'
import MyTradesComponent from '../components/Trades/MyTradesComponent'
import UserComponent from '../components/User/UserComponent'
import BookDetailsComponent from '../components/Books/BookDetailsComponent'
import AllBooksComponent from '../components/Books/AllBooksComponent'
import { connect } from 'react-redux';

const PageComponent = ({page}) => {
  const Page = pages[page];
  return Page ? <Page /> : null;
}

const mapStateToProps = ({page}) => ({page});
export default connect(mapStateToProps)(PageComponent);

const pages = {
  allBooksPage: AllBooksComponent,
  bookDetailsPage: BookDetailsComponent,
  userPage: UserComponent,
  myTradesPage: MyTradesComponent,
  loginPage: LoginComponent,
  registerPage: RegisterComponent,
};
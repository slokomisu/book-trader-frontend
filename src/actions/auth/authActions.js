import axios from 'axios';
export const LOGIN_REQUEST = 'auth/login_request';
export const LOGIN_SUCCESS = 'auth/login_success';
export const LOGIN_FAILURE = 'auth/login_failure';
export const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE'



function requestLogin(creds) {
  return {
    type: LOGIN_REQUEST,
    isFetching: true,
    isAuthenticated: false,
    creds
  }
}

function receiveLogin(user) {
  return {
    type: LOGIN_SUCCESS,
    isFetching: false,
    isAuthenticated: true,
    token: user.token
  }
}

function loginError(message) {
  return {
    type: LOGIN_FAILURE,
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

function requestLogout() {
  return {
    type: LOGOUT_REQUEST,
    isFetching: true,
    isAuthenticated: true
  }
}

function receiveLogout() {
  return {
    type: LOGOUT_SUCCESS,
    isFetching: false,
    isAuthenticated: false
  }
}

export function loginUser(creds) {
  return async dispatch => {
    dispatch(requestLogin(creds));
    try {
      let user = await axios.post(`${process.env.REACT_APP_API_URL}/api/login`, creds);
      let token = user.data.token;
      localStorage.setItem('token', token);
      dispatch(receiveLogin(user.data));
      dispatch({type: 'ALL_BOOKS'})
    } catch (error) {
      dispatch(loginError('Login failed'))
    }
  }
}

export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    localStorage.removeItem('token');
    dispatch(receiveLogout());
  }
}
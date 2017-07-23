import React from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink } from 'redux-first-router-link'
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/auth/authActions'

const NavBar = ({authenticated, logoutUser}) => {
  console.log(authenticated);
  return (
    <Menu >
      <Container>
        <Menu.Item header>Book Trader</Menu.Item>
        <Menu.Item as={NavLink} to="/books">
          All Books
        </Menu.Item>
        {authenticated &&
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/user/1">
            Profile
          </Menu.Item>
          <Menu.Item onClick={logoutUser}>
            Log out
          </Menu.Item>
        </Menu.Menu>
        }
        {!authenticated &&
        <Menu.Menu position="right">
          <Menu.Item as={NavLink} to="/login">
            Login
          </Menu.Item>
          <Menu.Item as={NavLink} to="/register">
            Register
          </Menu.Item>
        </Menu.Menu>
        }
      </Container>
    </Menu>
  )
}

const mapState = (state) => {
  return {
    authenticated: state.auth.isAuthenticated
  }
}

export default connect(mapState, {logoutUser})(NavBar);
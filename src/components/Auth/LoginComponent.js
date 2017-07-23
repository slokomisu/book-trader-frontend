import React from 'react'
import PropTypes from 'prop-types'
import { loginUser } from '../../actions/auth/authActions'
import { connect } from 'react-redux';

class LoginComponent extends React.Component {

  state = {
    username: '',
    password: ''
  }

  login = () => {
    let creds = {...this.state};
    console.log(creds)
    this.props.loginUser(creds);
  }


  render() {
    return (
      <div>
        <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})}/>
        <input type="password" value={this.state.password} onChange={e => this.setState({password: e.target.value})}/>
        <button onClick={this.login}>Submit</button>
      </div>
    )
  }
}

LoginComponent.propTypes = {}
LoginComponent.defaultProps = {}

export default connect(null, {loginUser})(LoginComponent)

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { loginEmployer } from '../../actions'; // TODO: update when file structure changes


class EmployerLogin extends Component {
  state = {
    email: '',
    password: ''
  }

  inputHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  submitHandler = (event) => {
    event.preventDefault();
    this.props.loginEmployer(this.state)
  };

  render() {
    if (this.props.loggedInEmployer.token) {
      this.props.history.push('/profile');
    }
    return (
      <div>
        <h3>Enter dis stuff</h3>
        <form onSubmit={this.submitHandler}>
          <input
            onChange={this.inputHandler}
            placeholder='Enter email'
            name='email'
            value={this.state.email}
          />
          <input
            onChange={this.inputHandler}
            placeholder='Enter password'
            name='password'
            value={this.state.password}
          />
          <button onSubmit={this.submitHandler}>PressMe</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ ...state });
};

export default withRouter(connect(mapStateToProps, { loginEmployer })(EmployerLogin));
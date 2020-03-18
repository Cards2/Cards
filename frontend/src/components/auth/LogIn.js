import React, { Component } from "react"; // Fragment
import actions from "../../services/index";
// import { Redirect } from "react-router-dom";
// import Footer from '../partials/Footer';
import SignUp from "./SignUp";
class LogIn extends Component {
  state = {
    joinUs: false
  };
  popUpSignUp = () => {
    if (this.state.joinUs) {
      return <SignUp {...this.props} setUser={this.props.setUser} />;
    }
  };
  toggle = () => {
    this.props.caller();
    this.setState({
      joinUs: true
    });
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then(user => {
        this.props.setUser({ ...user.data });
        this.props.history.push("/profile-update");
      })
      .catch(({ response }) => console.error(response.data));
  };

  redirect = () => {};

  render() {
    return (
      <div className='login-box'>
        {this.popUpSignUp()}
        <form className='form-box' onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            onChange={this.handleChange}
            placeholder='email'
          />
          <input
            name='password'
            type='password'
            onChange={this.handleChange}
            placeholder='password'
          />
          <div className='reg-btn'>
            <input
              id='btnlog'
              className='btn-login'
              type='submit'
              value='Log In'
              onClick={a => this.redirect}
            />
            <a id='btnsignup' className='btn-signup' onClick={this.toggle}>
              Sign up
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;

import React, { Component } from "react"; // Fragment
import actions from "../../services/index";
// import { Redirect } from "react-router-dom";
// import Footer from '../partials/Footer';
import SignUp from "./SignUp";

class LogIn extends Component {
  state = {
    signUp: false
  };

  popUpSignUp = () => {
    if (this.state.signUp) {
      return <SignUp {...this.props} 
      setUser={this.props.setUser} 
      callUsers={this.props.callUsers} 
      toggletrue={this.toggletrue}/>;
    }
  };

  toggletrue = () => {
    this.props.caller();
    this.setState({
      signUp: true
    });
  };


  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    actions
      .logIn(this.state)
      .then(user => {
        // console.log(user.data)
        this.props.setUser({ ...user.data });
        this.props.history.push("/profile-update")
      })
      .catch(( response ) => console.error(response.data));
  };

  
//   actions.oneUserQuery(user)
//   .then(res1 => {
//     console.log(1)
//     this.props.setUser({ ...res1.data.currentUser, ready1: true, })})
//     .catch(err => console.log(err) )
// actions.oneUserInteraction(user)
//   .then(res2 => {
//     console.log(2)
//     this.props.setUser({ ...res2.data.currUserInt, ready2: true, })})
// actions.userQuery(user)
//   .then(res3 => {
//     console.log(3)
//     this.props.setUser({ ...res3.data.users, ready3: true, })})
// actions.oneProjectQuery(user)
//   .then(res4 => {
//     console.log(4)
//     this.props.setUser({ ...res4.data.currentProject })})


  redirect = () => {
    window.location.pathname="/profile-update"
  };

  render() {
    // console.log(this.props)
    return (
      <div className='login-box'>
        {this.popUpSignUp()}
        <form className='form-box' onSubmit={e => this.handleSubmit(e)  }>
          <h4>Email</h4>
          <input
            name='email'
            type='email'
            onChange={this.handleChange}
            placeholder='email'
          />
          <h4>Password</h4>
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
            />
            <a id='btnsignup' className='btn-signup' onClick={this.toggletrue}>
              Sign up
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;

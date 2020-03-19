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
      return <SignUp {...this.props} setUser={this.props.setUser} />;
    }
  };

  toggle = () => {
    this.props.caller();
    this.setState({
      signUp: true
    });
  };

//  actionCalls = async () =>{
 
//   let res2 = await actions.userQuery();
//   console.log(res2, "res 2")
//   let res3 = await actions.oneUserQuery(user);
//   console.log(res3, 'res3')
//   let res4 = await actions.oneProjectQuery(user);
//   console.log(res4, 'res4')
//   let res5 = await actions.oneUserInteraction(user);
//   console.log(res5, 'res 5')

//   this.setState({ ...user.data, 
//     users: res2, 
//     ...res3.data.currentUser, 
//     ...res4.data.currentProject, 
//     ...res4.data.currentProject, 
//     ...res5.data.currUserInt, 
//     loading: false });
//   }


  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.user)
    actions
      .logIn(this.state)
      .then(user => {
        console.log(user)
        .oneUserQuery(user)
          .then(res1 => this.props.setUser({ ...res1.data }))
        .oneUserInteraction(user)
          .then(res2 => this.props.setUser({ ...res2.data }))
        .userQuery(user)
          .then(res3 => this.props.setUser({ ...res3.data }))
        .oneProjectQuery(user)
          .then(res4 => this.props.setUser({ ...res4.data }))
        this.props.setUser({ ...user.data });
        this.props.history.push("/profile-update")
      })
      .catch(({ response }) => console.error(response.data));
  };

  
  redirect = () => {};

  render() {
    return (
      <div className='login-box'>
        {this.popUpSignUp()}
        <form className='form-box' onSubmit={this.handleSubmit}>
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

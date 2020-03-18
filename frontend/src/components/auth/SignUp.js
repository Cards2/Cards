import React, { Component } from "react";
import actions from "../../services/index";
import Footer from "../partials/Footer";

class SignUp extends Component {
  state = {};

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    console.log(`handle submit 11`)
    actions
      .signUp(this.state)
      .then(username => {
          this.props.setUser({ ...username.data });
          this.props.history.push("/profile");
        })
        .catch(( response ) => console.error(response.data));
    };
    
    render() {
        console.log(this.props)
    return (
      <div className="backOfSign">
        <div className="signup-box">
          <h2 className='signUp-text'>
            <span className='signUp-text-main'>Welcome!</span>
            <span className='signUp-text-sub'>It's time to create your account</span>
            <img className='bar-line' src='./Icons/AccountCreationLine.svg' alt='lines'></img>
          </h2>
          <form  className='signUp-form' onSubmit={this.handleSubmit}>
             <div className='over-text'>
              <p id='username'>Username</p>
              <p id='email'>Email</p>
              <p id='password'>Password</p>
              </div>
            <input
              name="username"
              type="text"
              onChange={this.handleChange}
            //   placeholder="username"
            />
            <br></br>
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
            //   placeholder="email"
            />
            <br></br>
            <input
              name="password"
              type="password"
              onChange={this.handleChange}
            //   placeholder="password"
            />
            <br></br>
            <button className='create-acc' type="submit"  value="Sign Up">
              
              create account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

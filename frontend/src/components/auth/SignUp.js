import React, { Component } from "react";
import actions from "../../services/index";
import { render } from "react-dom";
import FlashMessage from "react-flash-message";
//import Footer from "../partials/Footer";

class SignUp extends Component {
  state = {
    username: "",
    email: "",
    password: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.username.length < 6) {
      console.log("the username must be x char long");
      this.setState({ usernameLength: false });
      return;
    } else if (this.state.password.length < 6) {
      console.log("the password must be x char long");
      this.setState({ passwordLength: false });
      return;
    } else if (this.state.password !== this.state.password2.length) {
      console.log("the passwords must match");
      this.setState({ passwordMatch: false });
      return;
    } else {
      actions
        .signUp(this.state)
        .then(username => {
          this.props.setUser({ ...username.data });
          this.props.history.push("/profile");
        })
        .catch(response => console.error(response.data));
    }
  };

  userNameLengthError = () => {
    const styles = { color: "red", fontSize: "10px" };
    if (this.state.usernameLength === false) {
      setTimeout(() => {
        this.setState({ usernameLength: true });
      }, 5000);
      return (
        <FlashMessage>
          <p style={styles}>
            Please enter a username that is at least 6 characters long!
          </p>
        </FlashMessage>
      );
    }
  };

  passwordLengthError = () => {
    const styles = { color: "red", fontSize: "10px" };
    if (this.state.passwordLength === false) {
      return (
        <FlashMessage duration={5000}>
          <p style={styles}>
            Please enter a password that is at least 6 characters long!
          </p>
        </FlashMessage>
      );
    }
  };

  passwordMatchError = () => {
    const styles = { color: "red", fontSize: "10px" };
    if (this.state.passwordMatch === false) {
      return (
        <FlashMessage duration={5000}>
          <p style={styles}>
            Your passwords must match. Reenter your password and try again.
          </p>
        </FlashMessage>
      );
    }
  };

  render() {
    console.log(this.props);
    return (
      <div className='backOfSign'>
        <div className='signup-box'>
          <h2 className='signUp-text'>
            <span className='signUp-text-main'>Welcome!</span>
            <span className='signUp-text-sub'>
              It's time to create your account
            </span>
            <img
              className='bar-line'
              src='./Icons/AccountCreationLine.svg'
              alt='lines'
            ></img>
          </h2>
          <form className='signUp-form' onSubmit={this.handleSubmit}>
            <label>
              <h5>Username</h5>
            </label>
            <input
              name='username'
              type='text'
              onChange={this.handleChange}
              placeholder='  username'
            />
            {this.userNameLengthError()}
            <br></br>
            <label>
              <h5>Email</h5>
            </label>
            <input
              name='email'
              type='email'
              onChange={this.handleChange}
              placeholder='  email'
            />
            <br></br>
            <label>
              <h5>Password</h5>
            </label>
            <input
              name='password'
              type='password'
              onChange={this.handleChange}
              placeholder='  password'
            />
            {this.passwordLengthError()}
            <br></br>
            <label>
              <h5>Confirm Password</h5>
            </label>
            <input
              name='password2'
              type='password'
              onChange={this.handleChange}
              placeholder='  confirm password'
            />
            {this.passwordMatchError()}
            <br></br>
            <button className='create-acc' type='submit' value='Sign Up'>
              create account
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;

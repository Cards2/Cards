import React, { Component } from "react";
import actions from "../../services";
//import Footer from "../partials/Footer";
//import CardTest from "../partials/CardTest";
import { Screen1 } from "./createProfileForms/Screen1";
import { Screen2 } from "./createProfileForms/Screen2";
import { Screen3 } from "./createProfileForms/Screen3";
import { Screen4 } from "./createProfileForms/Screen4";

class CreateProfile extends Component {
  state = {};

  transition1 = () => {
    this.setState({ screen: 1 });
    actions
      .userInteraction(this.props.user)
      .then(userdata => {})
      .catch(({ response }) => console.error(response.data));
  };

  transition2 = () => {
    this.setState({ screen: 2 });
  };

  transition3 = () => {
    this.setState({ screen: 3 });
  };

  handleSubmit = e => {
    console.log(this.props.user);
    e.preventDefault();
    actions
      .userInfo(this.props.user)
      .then(userdata => {
        this.props.history.push("/search");
      })
      .catch(({ response }) => console.error(response));
  };

  signUpForm = () => {
    if (!this.state.screen) {
      return (
        <Screen1
          {...this.props}
          handleChange={this.props.handleChange}
          setUserProperty={this.setUserProperty}
          user={this.props.user}
          setUser={this.setUser}
          transition1={this.transition1}
        />
      );
    } else if (this.state.screen === 1) {
      return (
        <Screen2
          {...this.props}
          handleChange={this.props.handleChange}
          setUserProperty={this.setUserProperty}
          user={this.state}
          setUser={this.setUser}
          transition2={this.transition2}
        />
      );
    } else if (this.state.screen === 2) {
      return (
        <Screen3
          {...this.props}
          handleChange={this.props.handleChange}
          setUserProperty={this.setUserProperty}
          user={this.state}
          setUser={this.setUser}
          transition3={this.transition3}
        />
      );
    } else if (this.state.screen === 3) {
      return (
        <Screen4
          {...this.props}
          handleChange={this.props.handleChange}
          setUserProperty={this.setUserProperty}
          user={this.state}
          setUser={this.setUser}
        />
      );
    }
  };

  render() {
    if (!this.props.user.loading && !this.props.user.email) {
      this.props.history.push("/log-in");
    }
    return (
      <div>
        <div>
          <div>
            <h1>New Profile</h1>
            <form
              onSubmit={e => {
                this.handleSubmit(e, this.state);
              }}
            >
              {this.signUpForm()}
            </form>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default CreateProfile;

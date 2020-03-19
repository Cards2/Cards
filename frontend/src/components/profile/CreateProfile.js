import React, { Component } from "react";
import actions from "../../services";
//import FlashMessage from "react-flash-message";
import { Screen1 } from "./createProfileForms/Screen1";
import { Screen2 } from "./createProfileForms/Screen2";
import { Screen3 } from "./createProfileForms/Screen3";
import { Screen4 } from "./createProfileForms/Screen4";

class CreateProfile extends Component {
  state = {};

  transition1 = () => {
    if (this.props.user.username.length < 6) {
      this.setState({ usernameLength: false });
      return;
    } else if (!this.props.user.title) {
      this.setState({ usernameTitle: false });
      return;
    } else {
      this.setState({ screen: 1 });
      actions
        .userInteraction(this.props.user)
        .then(userdata => {})
        .catch(({ response }) => console.error(response.data))
      actions.userQuery(this.props.user)
      .then(res3 => this.props.setUser({ ...res3.data }))  ;
    }
  };

  transition2 = () => {
    this.setState({ screen: 2 });
  };

  transition3 = () => {
    this.setState({ screen: 3 });
  };

  // submissionError = (err, msg) => {
  //   const styles = { color: "red", fontSize: "10px" };
  //   if (this.state.err === false) {
  //     setTimeout(() => {
  //       this.setState({ usernameLength: true });
  //     }, 5000);
  //     return (
  //       <FlashMessage>
  //         <p style={styles}>
  //           {msg}
  //         </p>
  //       </FlashMessage>
  //     );
  //   }
  // };

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
          // errors={this.state}
          // submissionError={this.submissionError}
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

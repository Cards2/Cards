import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/home/Home";
import NotFound from "./components/404/NotFound.js";
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
import Profile from "./components/profile/Profile";
import ProfileUpdate from "./components/profile/ProfileUpdate";
import actions from "./services/index";
import Search from "./components/search/Search";
import Projects from "./components/projects/Projects";
import NavBar from "./components/partials/NavBar";
import ProjectUpdate from "./components/projects/ProjectUpdate";
import Card from "./components/partials/Card";
import CardTest from "./components/partials/CardTest";
// import Footer from "./components/partials/Footer";

class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    let res2 = await actions.userQuery();
    let res3 = await actions.oneUserQuery(this.state._id);
    let res4 = await actions.oneProjectQuery(this.state._id);
    // console.log('RES 3', res3)
    this.setState({ ...user.data, loading: false, users: res2 });
    this.setState(res3.data.currentUser);
    this.setState(res4.data.currentProject);
  }

  setUser = user => this.setState(user);

  logOut = async () => {
    let res = await actions.logOut();
    this.setState({ loginTrigger: false });
    this.setUser({
      username: null,
      email: null,
      createdAt: null,
      updatedAt: null,
      _id: null
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value, userID: this.state._id });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route
              exact
              path='/:nav'
              render={props => (
                <NavBar
                  email={this.state.email}
                  logOut={this.logOut}
                  {...props}
                />
              )}
            />
          </Switch>

          <Switch>
            <Route
              exact
              path='/'
              render={props => <Home {...props} setUser={this.setUser} />}
            />
            <Route
              exact
              path='/sign-up'
              render={props => <SignUp {...props} setUser={this.setUser} />}
            />
            <Route
              exact
              path='/log-in'
              render={props => <LogIn {...props} setUser={this.setUser} />}
            />
            <Route
              exact
              path='/profile'
              render={props => (
                <Profile
                  {...props}
                  handleChange={this.handleChange}
                  setUserProperty={this.setUserProperty}
                  user={this.state}
                  setUser={this.setUser}
                />
              )}
            />
            <Route
              exact
              path='/profile-update'
              render={props => (
                <ProfileUpdate
                  {...props}
                  handleChange={this.handleChange}
                  setUserProperty={this.setUserProperty}
                  user={this.state}
                />
              )}
            />
            <Route
              exact
              path='/search'
              render={props => (
                <Search
                  {...props}
                  generalstate={this.state}
                />
              )}
            />
            <Route
              exact
              path='/projects'
              render={props => <Projects {...props} user={this.state} />}
            />
            <Route
              exact
              path='/project-update'
              render={props => (
                <ProjectUpdate
                  {...props}
                  handleChange={this.handleChange}
                  user={this.state}
                />
              )}
            />
            <Route
              exact
              path='/cards'
              render={props => <CardTest {...props} />}
            />
            <Route component={NotFound} />
          </Switch>
          {/* <Footer/> */}
        </BrowserRouter>
      </>
    );
  }
}
export default App;

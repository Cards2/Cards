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
// import Footer from "./components/partials/Footer";

class App extends Component {
  state = {};

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    this.setState({ ...user.data });

    let res2 = await actions.userQuery();
    this.setState({ users: res2 });
    // console.log(this.state)
    let res3 = await actions.oneUserQuery(this.state._id);
    this.setState({ currentUser: res3 });
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
    }); //FIX
  };

  render() {

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
              render={props => <Profile {...props} user={this.state} />}
            />
            <Route
              exact
              path='/profile-update'
              render={props => <ProfileUpdate {...props} user={this.state} />}
            />
            <Route
              exact
              path='/search'
              render={props => (
                <Search
                  {...props}
                  user={this.state}
                  generalstate={this.state}
                />
              )}
            />
            <Route
              exact
              path='/projects'
              render={props => <Projects {...props} user={this.state} />}
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

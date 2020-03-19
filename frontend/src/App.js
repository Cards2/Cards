import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import actions from "./services/index";
import NotFound from "./components/404/NotFound.js";
//partials
import NavBar from "./components/partials/NavBar";
// import Footer from "./components/partials/Footer";
// eslint-disable-next-line
import Card from "./components/partials/Card";
import CardTest from "./components/partials/CardTest";
import MyCard from "./components/profile/MyCard";
//home page
import Home from "./components/home/Home";
//authentication
import SignUp from "./components/auth/SignUp";
import LogIn from "./components/auth/LogIn";
//user data creation
import CreateProfile from "./components/profile/CreateProfile";
//cards tab
import ProfileUpdate from "./components/profile/ProfileUpdate";
import MyStack from "./components/profile/MyStack";
//search tab
import SearchUsers from "./components/search/SearchUsers";
import SearchProjects from "./components/search/SearchProjects";
//projects tab
import Projects from "./components/projects/Projects";
import MyTeams from "./components/projects/MyTeams";
import ProjectUpdate from "./components/projects/ProjectUpdate";
import UsercreationTest from "./components/partials/usercreationTest";
import Notifications from "./components/notifications/Notifications";


class App extends Component {
  state = {
    loading: true
  };

  async componentDidMount() {
    let user = await actions.isLoggedIn();
    let res2 = await actions.userQuery(user);
    // console.log(res2, "res 2")
    let res3 = await actions.oneUserQuery(user);
    // console.log(res3, 'res3')
    let res4 = await actions.oneProjectQuery(user);
    // console.log(res4, 'res4')
    let res5 = await actions.oneUserInteraction(user);
    // console.log(res5, 'res 5')

    this.setState({ ...user.data, 
      users: res2, 
      ...res3.data.currentUser, 
      ...res4.data.currentProject, 
      ...res4.data.currentProject, 
      ...res5.data.currUserInt, 
      loading: false });

  }


    // this.setState(res3.data.currentUser);
    // this.setState(res4.data.currentProject);
    // this.setState({...res5.data.currUserInt, loading: false});
  



  setUser = user => this.setState(user);

  logOut = async () => {
    // eslint-disable-next-line
    let res = await actions.logOut();
    this.setState({ loginTrigger: false });
    this.setUser({
      username: null,
      email: null,
      createdAt: null,
      updatedAt: null,
      _id: null,
      loading: false,
      users: null,
      title: null,
      art: null,
      programming: null,
      design: null,
      audio: null,
      writing: null,
      monday: null,
      tuesday: null,
      wednesday: null,
      thursday: null,
      friday: null,
      saturday: null,
      sunday: null,
      timezone: null,
      aboutMe: null,
      portfolio: null,
      contact: null,
      __v: 0,
      requestedCards: null,
      pendingCards: null,
      acceptedCards: null,
      salt: null,
      hash: null,
    });
  };


  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    console.log(this.state)
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
                <CreateProfile
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
              path='/my-stack'
              render={props => <MyStack {...props} generalstate={this.state} />}
            />
            <Route
              exact
              path='/search'
              render={props => (
                <SearchUsers {...props} generalstate={this.state} />
              )}
            />
            <Route
              exact
              path='/search-projects'
              render={props => (
                <SearchProjects {...props} generalstate={this.state} />
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
              path='/my-teams'
              render={props => <MyTeams {...props} user={this.state} />}
            />
            <Route
              exact
              path='/cards'
              render={props => <CardTest {...props} />}
            />
            <Route
              exact
              path='/mycard'
              render={props => <MyCard {...props} generalstate={this.state} />}
            />
            <Route
              exact
              path='/notifications'
              render={props => (
                <Notifications {...props} generalstate={this.state} />
              )}
            />
            <Route
              exact
              path='/userCreationTests'
              render={props => <UsercreationTest {...props} generalstate={this.state}  />}
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
            {this.state.username &&
            <Redirect to="/profile-update"/>
           }
            <Route        
              path='/'
              render={props => <Home {...props} setUser={this.setUser} />}
            />
            {/* <Route component={NotFound} /> */}
          </Switch>
          {/* <Footer/> */}
        </BrowserRouter>
      </>
    );
  }
}
export default App;

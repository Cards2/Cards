import React, {Component, Fragment} from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import SignUp from './components/auth/SignUp';
import LogIn from './components/auth/LogIn';
import Profile from './components/profile/Profile'
import actions from './services/index'
import Search from './components/search/Search'
import NavBar from './components/partials/NavBar'
<<<<<<< HEAD
import Footer from './components/partials/Footer'
=======

>>>>>>> e7f83b2093f7e609eb94e31fabca2fa171c6289b
class App extends Component {
  
  state = { }
  
  async componentDidMount() {
    let user = await actions.isLoggedIn()
    this.setState({...user.data})
    console.log('coolest ')
    console.log(this.state, "app.js state")

  }

  setUser = (user) => this.setState(user)
  
  logOut = async () => {
    let res = await actions.logOut()
    this.setUser({username: null, email:null, createdAt: null, updatedAt: null, _id: null }) //FIX 
  }

  render(){

    return (
<BrowserRouter>
    <NavBar email={this.state.email} logOut={this.logOut}/>
      <Switch>
        <Route exact path="/" render={(props) => <Home {...props} />} />
        <Route exact path="/sign-up" render={(props)=><SignUp {...props} setUser={this.setUser} />} />
        <Route exact path="/log-in" render={(props) => <LogIn {...props} setUser={this.setUser}/>} />
        <Route exact path="/profile" render={(props) => <Profile {...props} user={this.state} />} />
        <Route component={NotFound} />
      </Switch>
      <Footer/>
    </BrowserRouter>
  );
  }
}
export default App;

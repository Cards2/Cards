import React, { Component } from 'react';
import actions from '../../services/index'
// import Search from '../search/Search'



class Home extends Component {

  state = {
    allUsers: [],
    users: [],
    userdata: this.props.generalstate.users
  }


  searchfunction =( )=> {
   if(this.props.generalstate.users) {
      return this.props.generalstate.users.data.allUsers.map((eachuser, i) => {
      return (
      <>
        <br></br>
        <h1> Search </h1>
        <h3> User ID: {eachuser._id}  </h3>
        <h3> email: {eachuser.email}  </h3>
        </>
        ) 
      } )  
      }
    }

  render() {
    return (
      <div className="homeBox">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Card</span>
            <span className="heading-primary--sub">
              the creative team network
            </span>
          </h1>
        </div>
        <div>
          <p className='message'>
            A diferent aproach to networking. No matter if you are a hobbiest or a
            proffessional, you can find a team here
          </p>
        </div>
        <div>
          <a id='btnlog' className='btn-login' href="/log-in"><p>Log in</p></a>
          <a id='btnsignup'className='btn-signup' href="/sign-up">Sign up</a>
        </div>
      
      {this.searchfunction()}
      {console.log(this.props.generalstate)}
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import actions from '../../services/index'
import LogIn from '../auth/LogIn';
// import Search from '../search/Search'



class Home extends Component {

  state={
    login:false
  }


  render() {
    return (
      <div className="homeBox">
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span  id='depth'className="heading-primary--main">Card</span>
            <span className="heading-primary--sub">
              the creative team network
            </span>
          </h1>
        </div>
        <div className='organizer'>
        <div>
          <p className='message'>
            A diferent aproach to networking. No matter if you are a hobbiest or a
            proffessional, you can find a team here
          </p>
        </div>
        <div className='register-box'>
          {/* <a id='btnlog' className='btn-login' href="/log-in"><p>Log in</p></a> */}
          <LogIn setUser={this.props.setUser}/>
          
        </div>
        </div>
      </div>
    );
  }
}

export default Home;

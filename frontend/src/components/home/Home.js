import React, { Component } from "react";
import actions from "../../services/index";
import LogIn from "../auth/LogIn";
import Card from "../partials/Card";
// import Search from '../search/Search'
// LANDING PAGE

class Home extends Component {
  state = {
    login: false,
    xPos: 0,
    yPos: 0
  };

  render() {
    return (
      <div>
        <div className='homeBox'>
          <div className='header__text-box'>
            <h1 className='heading-primary'>
              <span id='depth' className='heading-primary--main'>
                Card
              </span>
              <span className='heading-primary--sub'>
                the creative team network
              </span>
            </h1>
          </div>
          <div className='organizer'>
            <div>
              <p className='message'>
                A diferent aproach to networking. No matter if you are a
                hobbiest or a proffessional, you can find a team here
              </p>
            </div>
            <div className='register-box'>
              {/* <a id='btnlog' className='btn-login' href="/log-in"><p>Log in</p></a> */}
              <LogIn setUser={this.props.setUser} />
            </div>

            {/* card playground */}
          </div>
        </div>
        <div className='cardPreviewBox'>
          {/* three cards go here */}
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
//style={{position: 'absolute', right: this.state.xPos, border:'3px solid #73AD21'}}

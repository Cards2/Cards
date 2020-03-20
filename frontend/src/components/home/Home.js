import React, { Component } from "react";
// import actions from "../../services/index";
import LogIn from "../auth/LogIn";
import CardTest from "../partials/CardTest";

// LANDING PAGE
class Home extends Component {
  state = {
    login: false,
    xPos: 0,
    yPos: 0,
    id: 'card',
    
  };
  caller=()=>{
this.setState({
  id: window.location.pathname
})
  }

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
              <LogIn setUser={this.props.setUser} caller={this.caller} callUsers={this.callUsers} {...this.props}/>
            </div>

            {/* card playground */}
          </div>
        </div>
        <div className='cardPreviewBox'>
          {/* three cards go here */}
          
          <CardTest name='Isaac' title='Web-Developer' bkpic={"https://images.unsplash.com/photo-1503289408281-f8314bf417c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"}  />
          <CardTest name='David' title='Web-Developer' bkpic={"https://images.unsplash.com/photo-1495524495561-e6f34fe3f445?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}   />
          <CardTest name='Melvin' title='Web-Developer' bkpic={"https://images.unsplash.com/photo-1553356084-58ef4a67b2a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} />
        </div>
      </div>
    );
  }
}

export default Home;
//style={{position: 'absolute', right: this.state.xPos, border:'3px solid #73AD21'}}

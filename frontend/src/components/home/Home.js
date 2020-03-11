import React, { Component } from "react";
import actions from "../../services/index";

class Home extends Component {
  async componentDidMount() {
    //actions.test()
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
      </div>
    );
  }
}

export default Home;

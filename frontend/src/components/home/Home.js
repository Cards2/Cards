import React, { Component } from "react";
import actions from "../../services/index";
import LogIn from "../auth/LogIn";
// import Search from '../search/Search'
import Card from "react-tilt";

class Home extends Component {
  state = {
    login: false
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
          <Card
            className='card'
            // onMouseMove={(e, x) => {
            //   console.log(e, x, e.clientX);
            // }}
            options={{ max: 15 }}
            style={{
              height: 220,
              width: 350,
              backgroundImage: `url(${"https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})`,
              backgroundSize: "cover",
              borderRadius: "6px"
            }}
          >
            <div className='innerCard'>
              {" "}
              <h1 className='cardName'>Isaac</h1>
              <h3 className='cardTitle'>Graphic Designer</h3>{" "}
            </div>
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;

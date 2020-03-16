import React, { Component } from 'react';
import actions from '../../services/index'

import Tilt from "react-tilt";


class MyCard extends Component {

    state = {
        
    }

    adduser= (e) =>{
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value, userID: this.props.generalstate.userID} );
        // actions.sendMyCard(this.state )
    }

    cardCall = () => {
        if (this.props.generalstate.users) {
          return this.props.generalstate.users.data.allUsers.map((eachuser, i) => {
            return (
              <Tilt
                className='card Tilt'
                options={{ max: 15 }}
                style={{
                  height: 220,
                  width: 350,
                  transformStyle: "preserve-3d",
                  backgroundImage: `url(${"https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})`,
                  backgroundSize: "cover",
                  borderRadius: "6px"
                }}
              >
                <div className='Tilt-inner innerCard'>
                  {" "}
                  <h1 className='cardName'>{eachuser.username}</h1>
                  <h3 className='cardTitle'>{eachuser.title} </h3>
                  <h3 className='cardTitle'>{eachuser.aboutMe} </h3>

                  <button onClick={this.adduser} name="requestedCards" value={eachuser._id} >  Add User to Stack </button>

                </div>
              </Tilt>
            );
          });
        }
      };


    render() {
        console.log(this.state, "cucu")
        return (
            <div>
                <h1> cucu </h1>
                {this.cardCall()}
            </div>
        );
    }
}

export default MyCard;
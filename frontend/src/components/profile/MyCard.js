import React, { Component } from 'react';
import actions from '../../services/index'

import Tilt from "react-tilt";


class MyCard extends Component {

    state = {
        
    }

    adduser= (e) =>{
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
        console.log(this.state, "cucu")

        actions.sendMyCard(this.state)
    }

    cardCall = () => {
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
                  borderRadius: "6px",
                  color: "white",
                }}
              >
                <div className='Tilt-inner innerCard'>
                  {" "}
                  <h1 className='cardName'>Grampa</h1>
                  <h3 className='cardTitle'> The Boss </h3>
                  <h3 className='cardTitle'> Just the shake an bake</h3>

                  <button onClick={this.adduser} name="requestedCards"  >  Add User to Stack </button>

                </div>
              </Tilt>
         );      
      };









    cardStack =() => {

    };

    incomingCards = () =>{

    };










    render() {
        console.log(this.props.generalstate)
        return (
            <div>
                <h1> cucu </h1>
                {this.cardCall()}
                {this.incomingCards()}
            </div>
        );
    }
}

export default MyCard;
import React, { Component } from 'react';
import actions from '../../services/index'

import Tilt from "react-tilt";


class MyCard extends Component {

    state = {
        
    }

    // call user data for each user interaction:
    async componentDidMount(){
      console.log(this.props.generalstate)
      // let res = await actions.
    }





// Send Request
    adduser= (e) =>{
        e.preventDefault()
        this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
        console.log(this.state, "cucu")
        actions.sendMyCard(this.state)
    }

// Delete Request
    cardDeleteRequest= async (e)=>{
      this.props.affectRequests(e.target.value)
      let pendingcardarr = this.props.generalstate.pendingCards;
      let userIndex = pendingcardarr.indexOf(e.target.value);
      await this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
      console.log(this.state, "request")
      actions.deleteRequest(this.state)
      if (userIndex>-1){
        pendingcardarr.splice(userIndex,1)
      }
      console.log(this.props.generalstate, "generalstate")
    }

 // Accept Request
    cardAcceptRequest= async (e)=>{
      this.props.affectRequests(e.target.value)
      await this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
      console.log(this.state, "Positivo")
      actions.acceptRequest(this.state)

    }

    // My Card
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
                  <h1 className='cardName'>{this.props.generalstate.title}</h1>
                  <h3 className='cardTitle'> {this.props.generalstate.username} </h3>
                </div>
              </Tilt>
         );      
      };

  incomingCards =()=>{
    if(this.props.generalstate.pendingCards.length >0){
      return this.props.generalstate.pendingCards.map(eachrequest => {
        return ( 
            <>
              <div> 
              <h1 style={{color: "white"}} > Incoming cards </h1>
              <h1> User ID: </h1>
              <h2>{eachrequest}</h2>
              <button onClick={this.cardDeleteRequest} name="pendingCards" value={eachrequest}> Delete Request </button>
              <br></br>
              <button  onClick={this.cardAcceptRequest} name="acceptedCards" value={eachrequest}> Accept Request </button>
              </div> 
            </>
          )
        }
      )
    } else {
      return(
        <> 
        <h1 style={{color: "white"}} > No Pending Requests </h1>
        </>
      )
    }
  }

  
  render() {
        console.log(this.props.generalstate)
    return (
       <div>
          <h1> My Card </h1>
            {this.cardCall()}
            {this.incomingCards()}


            </div>
        );
    }
}

export default MyCard;
import React, { Component } from "react";
import actions from '../../services/index'
import Card from '../partials/Card'
export default class MyStack extends Component {

  cardDeleteRequest= async (e)=>{
    await this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
    console.log(this.state, "muku")
    actions.deleteRequest(this.state)
  }

  cardAcceptRequest= async (e)=>{
    await this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
    console.log(this.state, "Positivo")
    actions.acceptRequest(this.state)
  }


  incomingCards = () =>{
    if (this.props.generalstate) {
      return this.props.generalstate.pendingCards.map(eachrequest => {
        return ( 
            <>
          <div> 
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
  }
  };
  render() {
    return (
      <div>
        <Card />
        <h1>MyStack Page</h1>
        <h1 style={{color: "white"}} > Incoming cards </h1>
            {this.incomingCards()}
      </div>
    );
  }
}

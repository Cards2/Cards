import React, { Component } from "react";
import actions from '../../services/index'
import Card from '../partials/Card'
export default class MyStack extends Component {

  cardDeleteRequest= async (e)=>{
    await this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
    console.log(this.state, "muku")
    actions.deleteRequest(this.state)
  }

  stackfunction=()=>{
    let allUsersArr = this.props.generalstate.allUsers;
    let myStackArr = this.props.generalstate.acceptedCards;

    for(let i in myStackArr){    
      var aUserCard = allUsersArr.find( users=>users._id === myStackArr[i] )
        console.log(aUserCard)
        return(
          <>
        <Card CurrentCard={aUserCard} />
        </>
        )
    } 
  }


  incomingCards = () => {
    if (this.props.generalstate.acceptedCards.length > 0) {
      return this.props.generalstate.acceptedCards.map(eachCardInStack => {
        return (
          <>
            <div>
              <h1> User ID: </h1>
              <h2>{eachCardInStack}</h2>
              <button
                onClick={this.cardDeleteRequest}
                name='acceptedCards'
                value={eachCardInStack}
              >
                {" "}
                Delete Request{" "}
              </button>
              <br></br>
              <button
                onClick={this.cardAcceptRequest}
                name='acceptedCards'
                value={eachCardInStack}
              >
                {" "}
                Accept Request{" "}
              </button>
            </div>
          </>
        );
      });
    } else {
      return (
        <>
          <h1 style={{ color: "white" }}> You currently do not have any cards in your stack! Send someone your card! </h1>
        </>
      );
    }
  };

  
  render() {
    console.log(this.props.generalstate)

    return (
      <div>
        <Card CurrentCard={this.props.generalstate} />
        <h1>MyStack Page</h1>
        <h1 style={{color: "white"}} > My Stack </h1>
            {this.stackfunction()}
      </div>
    );
  }
}

import React, { Component } from "react";
import actions from "../../services/index";


export default class Notifications extends Component {
  
  // Delete Request
  cardDeleteRequest = async e => {
    this.props.affectRequests(e.target.value);
    let pendingcardarr = this.props.generalstate.pendingCards;
    let userIndex = pendingcardarr.indexOf(e.target.value);
    await this.setState({
      [e.target.name]: e.target.value,
      _id: this.props.generalstate._id
    });
    console.log(this.state, "request");
    actions.deleteRequest(this.state);
    if (userIndex > -1) {
      pendingcardarr.splice(userIndex, 1);
    }
    console.log(this.props.generalstate, "generalstate");
  };

  // Accept Request
  cardAcceptRequest = async e => {
      this.props.affectRequests(e.target.value);
      await this.setState({
        [e.target.name]: e.target.value,
        _id: this.props.generalstate._id
      });
      console.log(this.state, "Positivo");
      actions.acceptRequest(this.state);
    };

  incomingCards = () => {
    if (this.props.generalstate.pendingCards.length > 0) {
      return this.props.generalstate.pendingCards.map(eachrequest => {
        return (
          <>
            <div>
              <h1 style={{ color: "white" }}> Incoming cards </h1>
              <h1> User ID: </h1>
              <h2>{eachrequest}</h2>
              <button
                onClick={this.cardDeleteRequest}
                name='pendingCards'
                value={eachrequest}
              >
                {" "}
                Delete Request{" "}
              </button>
              <br></br>
              <button
                onClick={this.cardAcceptRequest}
                name='acceptedCards'
                value={eachrequest}
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
          <h1 style={{ color: "white" }}> No Pending Requests </h1>
        </>
      );
    }
  };

  render() {
    return (
      <div>
        <h1>This is where the User's notifications are displayed</h1>
        {this.incomingCards()}
      
      </div>
    );
  }
}

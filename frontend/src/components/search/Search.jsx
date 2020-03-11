import React, { Component } from "react";
import action from "../../services/index";
class Search extends Component {
  state = {
    allUsers: [],
    users: [],
    userdata: this.props.generalstate.users
  };

  profileCallFunc = () => {
      
    if (this.props.generalstate.users) {
      return this.props.generalstate.users.data.allUsers.map((eachuser, i) => {
        return action.profileCall(eachuser._id).then(res => {
          console.log("fuckyeah");
        });
      });
    }
  };
  searchfunction = () => {
    if (this.props.generalstate.users) {
      return this.props.generalstate.users.data.allUsers.map((eachuser, i) => {
        return (
          <>
            <br></br>
            <h1> Search </h1>
            <h3> User ID: {eachuser._id} </h3>
            <h3> email: {eachuser.email} </h3>
          </>
        );
      });
    }
  };

  render() {
    {
      this.profileCallFunc();
    }
    return (
      <div>
        {this.searchfunction()}
        {console.log(this.props.generalstate)}
      </div>
    );
  }
}

export default Search;

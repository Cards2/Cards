import React, { Component } from "react";
import Tilt from "react-tilt";

class Search extends Component {
  state = {
    allUsers: [],
    users: []
  };

  searchfunction = () => {
    if (this.props.generalstate.users) {
      return this.props.generalstate.users.data.allUsers.map((eachuser, i) => {
        return <div></div>;
      });
    }
  };

  projectCall = () => {
    console.log(this.props.generalstate);
    // if (this.props.generalstate.projects) {
    //   return this.props.generalstate.projects.data.allProjects.map((eachproject) =>{
    //     return (
    //       <div></div>
    //     )
    //   })
    // }
  };

  cardCall = () => {
    if (this.props.generalstate.users) {
      return this.props.generalstate.users.data.allUsers.map(eachuser => {
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
              <h3 className='cardTitle'>{eachuser.title} </h3>{" "}
            </div>
          </Tilt>
        );
      });
    }
  };

  render() {
    return (
      <div className='searchPage'>
        <div className='searchBar'>{/* {this.searchfunction()} */}</div>

        {this.cardCall()}
        {this.projectCall()}
      </div>
    );
  }
}

export default Search;

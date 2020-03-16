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
              <h3 className='cardTitle'>{eachuser.title} </h3>{" "}
            </div>
          </Tilt>
        );
      });
    }
  };

  render() {
    return (
      <div>
        {/* {this.searchfunction()} */}
        {this.cardCall()}
      </div>
    );
  }
}

export default Search;

// profileCallFunc = () => {

//   if (this.props.generalstate.users) {
//     return this.props.generalstate.users.data.allUsers.map((eachuser, i) => {
//       return action.profileCall(eachuser._id).then(res => {
//         console.log(res);
//       });
//     });
//   }
// };

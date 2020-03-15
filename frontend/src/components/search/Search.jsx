import React, { Component } from "react";
import Tilt from "react-tilt";
import action from "../../services/index";
class Search extends Component {
  state = {
    allUsers: [],
    users: [],
    userdata: this.props.generalstate.users
  };


  searchfunction = () => {
    if (this.props.generalstate.users) {
      return this.props.generalstate.users.data.allUsers.map((eachuser, i) => {
        return (
          <>
           <br></br>
            <h1> Search </h1>

          <h2> Card Profiles </h2>

            {/* <h3> User ID: {eachuser._id} </h3> */}
            <h3> Username: {eachuser.username} </h3>
            <h3> Title: {eachuser.title} </h3>
            <h3> About: </h3>
            <p> {eachuser.about} </p>
            <h3> Quote: </h3>
            <p> {eachuser.quote} </p>
            <h3> Art/Animation Skills: {eachuser.art}/10 </h3>
            <h3> Programming Skills: {eachuser.programming}/10 </h3>
            <h3> Design Skills: {eachuser.design}/10 </h3>
            <h3> Audio Skills: {eachuser.audio}/10 </h3>
            <h3> Writing Skills: {eachuser.writing}/10 </h3>

            <h2> Availability:</h2>
            {/* How are we displaying this information?? */}
            <h3> Monday:</h3>
            <h4> {eachuser.monday}</h4>
            <h3> Tuesday:</h3>
            <h4> {eachuser.tuesday}</h4>
            <h3> Wednesday:</h3>
            <h4> {eachuser.wednesday}</h4>
            <h3> Thursday:</h3>
            <h4> {eachuser.thursday}</h4>
            <h3> Friday:</h3>
            <h4> {eachuser.friday}</h4>
            <h3> Saturday:</h3>
            <h4> {eachuser.saturday}</h4>
            <h3> Sunday:</h3>
            <h4> {eachuser.sunday}</h4>
           </>
        );
      });
    }
  };

cardTest = () => {
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
          {this.cardTest()}

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

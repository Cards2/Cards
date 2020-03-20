import React, { Component } from "react";
import actions from '../../services/index'

import Tilt from "react-tilt";

class SearchUsers extends Component {
  state = {
    show: "additional",
    hide: "hide",
    onLoad: "static",
    choice: 1,
  };

  showOrHide = () => {
    if (this.state.choice === 1) {
      return this.state.onLoad;
    } else if (this.state.choice === 2) {
      return this.state.show;
    } else if (this.state.choice === 3) {
      return this.state.hide;
    }
  };

  toggler = num => {
    this.setState({
      choice: num
    });
  };

  availability=(choice)=>{
    if(choice === 'always'){
      return 'Green'
    } else if(choice === 'sometimes'){
      return 'Orange'
    } else if(choice === 'never'){
      return 'Red'
    }else{
      return 'Green'
    }
  }

  adduser= async (e) =>{
    e.preventDefault()
    await this.setState({[e.target.name]: e.target.value, _id: this.props.generalstate._id});
    console.log(this.state, "muku")
    actions.sendMyCard(this.state)
  }

  allCardsTilt = () => {
    if (this.props.generalstate.allUsers) {
      return this.props.generalstate.allUsers.map(eachuser => {
        return (
          <div>
          <Tilt
          className='card Tilt'
          options={{ max: 15 }}
          style={{
            height: 220,
            width: 350,
            transformStyle: "preserve-3d",
            backgroundSize: "cover",
            borderRadius: "6px"
            }}>
          <div className='Tilt-inner innerCard'> 
          <div>
            <div>
              <div className="center">
                <div className="card">
                  <div className={this.showOrHide()}>
                    <div className="more-info">
                      <div className="switch-container">
                        <div className="switcher" onClick={a => this.toggler(3)}>
                          <img src="./Icons/card-toggle-inactive.svg" alt="" />
                        </div>
                        <div>
                        <input type="image" alt='add user' src="./Icons/user-interaction-btn.svg" 
                        onClick={this.adduser} name="requestedCards" value={eachuser._id}></input>                                                
                        </div>
                      </div>
                      <div className="title-organizer">
                        <h1>
                          <span className="heading-card--main">
                            {eachuser.username} </span>
                          <span className="heading-card--sub">
                            {eachuser.title} </span>
                        </h1>
                      </div>
                      <div className="user-link">
                        <span className="user-conections">
                          <img alt='copy user link' src="./Icons/copy-user-link-btn.svg" /> 1564
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class="general">
                    <div id="under" className="switch-container">
                      <div className="at">
                        <img src="./Icons/user-contact-btn.svg" alt="" />
                      </div>
                      <div className="switcher" onClick={a => this.toggler(2)}>
                        <img src="./Icons/card-toggle-active.svg" alt="" />
                      </div>
                      <div>
                      <input type="image" alt='user interaction button' src="./Icons/user-interaction-btn.svg" 
                        onClick={this.adduser} name="requestedCards" value={eachuser._id}>
                        </input>
                      </div>
                    </div>
                    <div className="middle-container">
                      <div className="middle-left">
                        <p className='header'id='about'>About</p>
                        <p>
                        {eachuser.aboutMe} 
                        </p>
                      </div>
                      <div className="middle-center">
                      <p className='header'id='aval'>Avalbility</p>
                      <div className='box'>
                        <div id={this.availability( `${eachuser.monday}` )}>Mon</div>
                        <div id={this.availability( `${eachuser.tuesday}` )}>Tue</div>
                        <div id={this.availability( `${eachuser.wednesday}` )}>Wed</div>
                        <div id={this.availability( `${eachuser.thrusday}` )}>Thu</div>
                        <div id={this.availability( `${eachuser.friday}` )}>Fri</div>
                        <div id={this.availability( `${eachuser.saturday}` )}>Sat</div>
                        <div id={this.availability( `${eachuser.sunday}` )}>Sun</div>
                        </div>
                      </div>
                      <div className="middle-rigth">
                        <p className='header'>Skills</p>
                        <div className='rating'>
                          <img src="./Icons/Design.svg" alt="" />
                          <p className='level'> {eachuser.design} </p>
                        </div>
                        <div className='rating'>
                          <img src="./Icons/Other-Misc.svg" alt="" />
                          <p className='level'> {eachuser.design}  </p>
                        </div>
                        <div className='rating'>
                          <img src="./Icons/Programming.svg" alt="" />
                          <p className='level'> {eachuser.programming} </p>
                        </div>
                        <div className='rating'>
                          <img src="./Icons/Art.svg" alt="" />
                          <p className='level'> {eachuser.art} </p>
                        </div>
                        <div className='rating'>
                          <img src="./Icons/Audio.svg" alt="" />
                          <p className='level'> {eachuser.audio} </p>
                        </div>
                        <div className='rating'>
                          <img src="./Icons/Writing.svg" alt="" />
                          <p className='level'> {eachuser.design} </p>
                        </div>
                      </div>
                    </div>
                    <div className="bottom-container">
                      <div className="user-craft">
                        Portfolio:<a href="{eachuser.portfolio}">{eachuser.portfolio}</a>
                      </div>
                      <div className="user-conections" id="conection-under">
                        <img alt='copy user link button' src="./Icons/copy-user-link-btn.svg" /> 1564
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Tilt>
        </div>
        );
      });
    }
  }

  render() {
    console.log(this.props.generalstate)
    return (
      <div className='searchPage'>
        <div className='searchBar'> </div>
        {this.allCardsTilt()}

      </div>
    );
  }
}

export default SearchUsers;

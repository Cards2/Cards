import React, { Component } from "react";
import Tilt from "react-tilt";

export default class Card extends Component {
  state = {
    show: "additional",
    hide: "hide",
    onLoad: "static",
    choice: 1
  };

  // This makes the card component be conditionally denredered by passing in props in anywhere we want
  async componentDidMount() {
    this.setState({ ...this.props.CurrentCard });
  }
  
  rerender=()=>{
    if(this.state.username !== this.props.CurrentCard.username || this.state.title !== this.props.CurrentCard.title ||this.state.aboutMe !== this.props.CurrentCard.aboutMe || this.state.art !== this.props.CurrentCard.art || this.state.programming !== this.props.CurrentCard.programming || this.state.audio !== this.props.CurrentCard.audio || this.state.writing !== this.props.CurrentCard.writing || this.state.portfolio !== this.props.CurrentCard.portfolio || this.state.monday !== this.props.CurrentCard.monday || this.state.tuesday !== this.props.CurrentCard.tuesday || this.state.thrusday !== this.props.CurrentCard.thrusday || this.state.wednesday !== this.props.CurrentCard.wednesday || this.state.friday !== this.props.CurrentCard.friday || this.state.saturday !== this.props.CurrentCard.saturday || this.state.sunday !== this.props.CurrentCard.sunday || this.state.username !== this.props.CurrentCard.username){
    this.setState({...this.props.CurrentCard})
    }
  }

  update = () => {
    
    this.setState({ ...this.props.CurrentCard });
  };

  // index = () => {
  //   if (this.props.id === "/") {
  //     return "cards";
  //   } else {
  //     return "card";
  //   }
  // };

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

  availability = choice => {
    if (choice === "always") {
      return "Green";
    } else if (choice === "sometimes") {
      return "Orange";
    } else if (choice === "never") {
      return "Red";
    } else {
      return "Green";
    }
  };
  
  render() {
    {this.rerender()}
    console.log(this.props.CurrentCard);
    return (
      <Tilt
      className='card Tilt'
      options={{ max: 15 }}
      style={{
        height: 220,
        width: 350,
        transformStyle: "preserve-3d",
        
        backgroundSize: "cover",
        borderRadius: "6px"
      }}
      >
        <div className='Tilt-inner innerCard'>
          <div>
            <div>
              <div>
                <div className='center'>
                  <div className='card'>
                    <div className={this.showOrHide()}>
                      <div className='more-info'>
                        <div className='switch-container'>
                          <div
                            className='switcher'
                            onClick={a => this.toggler(3)}
                          >
                            <img
                              src='./Icons/card-toggle-inactive.svg'
                              alt=''
                            />
                          </div>
                          <div>
                            <img
                              alt='user interaction button'
                              src='./Icons/user-interaction-btn.svg'
                            ></img>
                          </div>
                        </div>
                        <div className='title-organizer'>
                          <h1>
                            <span className='heading-card--main'>
                              {" "}
                              {this.state.username}{" "}
                            </span>
                            <span className='heading-card--sub'>
                              {this.state.title}
                            </span>
                          </h1>
                        </div>
                        <div className='user-link'>
                          <span className='user-conections'>
                            <img
                              alt='user interaction button'
                              src='./Icons/copy-user-link-btn.svg'
                            />{" "}
                            1564
                          </span>
                        </div>
                      </div>
                    </div>
                    <div class='general'>
                      <div id='under' className='switch-container'>
                        <div className='at'>
                          <img src='./Icons/user-contact-btn.svg' alt='' />
                        </div>
                        <div
                          className='switcher'
                          onClick={a => this.toggler(2)}
                        >
                          <img src='./Icons/card-toggle-active.svg' alt='' />
                        </div>
                        <div>
                          <img
                            alt='user interaction button'
                            src='./Icons/user-interaction-btn.svg'
                          ></img>
                        </div>
                      </div>
                      <div className='middle-container'>
                        <div className='middle-left'>
                          <p className='header' id='about'>
                            About
                          </p>
                          <p>{this.state.aboutMe}</p>
                        </div>
                        <div className='middle-center'>
                          <p className='header' id='aval'>
                            Avalbility
                          </p>
                          <div className='box'>
                            <div id={this.availability(`${this.state.monday}`)}>
                              Mon
                            </div>
                            <div
                              id={this.availability(`${this.state.tuesday}`)}
                            >
                              Tue
                            </div>
                            <div
                              id={this.availability(`${this.state.wednesday}`)}
                            >
                              Wed
                            </div>
                            <div
                              id={this.availability(`${this.state.thrusday}`)}
                            >
                              Thu
                            </div>
                            <div id={this.availability(`${this.state.friday}`)}>
                              Fri
                            </div>
                            <div
                              id={this.availability(`${this.state.saturday}`)}
                            >
                              Sat
                            </div>
                            <div id={this.availability(`${this.state.sunday}`)}>
                              Sun
                            </div>
                          </div>
                        </div>
                        <div className='middle-rigth'>
                          <p className='header'>Skills</p>
                          <div className='rating'>
                            <img src='./Icons/Design.svg' alt='' />
                            <p className='level'>{this.state.design}</p>
                          </div>
                          <div className='rating'>
                            <img src='./Icons/Other-Misc.svg' alt='' />
                            <p className='level'>{this.state.design}</p>
                          </div>
                          <div className='rating'>
                            <img src='./Icons/Programming.svg' alt='' />
                            <p className='level'>{this.state.programming}</p>
                          </div>
                          <div className='rating'>
                            <img src='./Icons/Art.svg' alt='' />
                            <p className='level'>{this.state.art}</p>
                          </div>
                          <div className='rating'>
                            <img src='./Icons/Audio.svg' alt='' />
                            <p className='level'>{this.state.audio}</p>
                          </div>
                          <div className='rating'>
                            <img src='./Icons/Writing.svg' alt='' />
                            <p className='level'>{this.state.writing}</p>
                          </div>
                        </div>
                      </div>
                      <div className='bottom-container'>
                        <div className='user-craft'>
                          Portfolio:
                          <a href='www.google.com'>{this.state.portfolio}</a>
                        </div>
                        <div className='user-conections' id='conection-under'>
                          <img
                            alt='copy user link button'
                            src='./Icons/copy-user-link-btn.svg'
                          />{" "}
                          1564
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    );
  }
}

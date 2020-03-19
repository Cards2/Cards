import React, { Component } from "react";
import Tilt from "react-tilt";

export default class Card extends Component {
  state = {
    show: "additional",
    hide: "hide",
    onLoad: "static",
    choice: 1
  };
  index = () => {
    if (this.props.id === "/") {
      return "cards";
    } else {
      return "card";
    }
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
  abiability = choice => {
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
    console.log(window.location.pathname);
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
              <div className='center'>
                <div className={this.index()}>
                  <div className={this.showOrHide()}>
                    <div className='more-info'>
                      <div className='switch-container'>
                        <div
                          className='switcher'
                          onClick={a => this.toggler(3)}
                        >
                          <img src='./Icons/card-toggle-inactive.svg' alt='' />
                        </div>
                        <div>
                          <img alt='user interaction button' src='./Icons/user-interaction-btn.svg'></img>
                        </div>
                      </div>
                      <div className='title-organizer'>
                        <h1>
                          <span className='heading-card--main'>
                            {this.props.username}
                          </span>
                          <span className='heading-card--sub'>
                            {this.props.title}
                          </span>
                        </h1>
                      </div>
                      <div className='user-link'>
                        <span className='user-conections'>
                          <img alt='copy user link button' src='./Icons/copy-user-link-btn.svg' /> 1564
                        </span>
                      </div>
                    </div>
                  </div>
                  <div class='general'>
                    <div id='under' className='switch-container'>
                      <div className='at'>
                        <img src='./Icons/user-contact-btn.svg' alt='' />
                      </div>
                      <div className='switcher' onClick={a => this.toggler(2)}>
                        <img src='./Icons/card-toggle-active.svg' alt='' />
                      </div>
                      <div>
                        <img alt='user interaction button' src='./Icons/user-interaction-btn.svg'></img>
                      </div>
                    </div>
                    <div className='middle-container'>
                      <div className='middle-left'>
                        <p className='header' id='about'>
                          About
                        </p>
                        <p>{this.props.about}</p>
                      </div>
                      <div className='middle-center'>
                        <p className='header' id='aval'>
                          Avalbility
                        </p>
                        <div className='box'>
                          <div id={this.abiability("always")}>Mon</div>
                          <div id={this.abiability("always")}>Tue</div>
                          <div id={this.abiability("always")}>Wed</div>
                          <div id={this.abiability("always")}>Thu</div>
                          <div id={this.abiability("always")}>Fri</div>
                          <div id={this.abiability("always")}>Sat</div>
                          <div id={this.abiability("always")}>Sun</div>
                        </div>
                      </div>
                      <div className='middle-rigth'>
                        <p className='header'>Skills</p>
                        <div className='rating'>
                          <img src='./Icons/Design.svg' alt='' />
                          <p className='level'>8</p>
                        </div>
                        <div className='rating'>
                          <img src='./Icons/Other-Misc.svg' alt='' />
                          <p className='level'>8</p>
                        </div>
                        <div className='rating'>
                          <img src='./Icons/Programming.svg' alt='' />
                          <p className='level'>8</p>
                        </div>
                        <div className='rating'>
                          <img src='./Icons/Art.svg' alt='' />
                          <p className='level'>8</p>
                        </div>
                        <div className='rating'>
                          <img src='./Icons/Audio.svg' alt='' />
                          <p className='level'>8</p>
                        </div>
                        <div className='rating'>
                          <img src='./Icons/Writing.svg' alt='' />
                          <p className='level'>8</p>
                        </div>
                      </div>
                    </div>
                    <div className='bottom-container'>
                      <div className='user-craft'>
                        Portfolio:<a href='www.google.com'>youaremy@favorite.link</a>
                      </div>
                      <div className='user-conections' id='conection-under'>
                        <img alt='copy user link button' src='./Icons/copy-user-link-btn.svg' /> 1564
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

import React, { Component } from 'react'
import Tilt from "react-tilt";

export default class Card extends Component {
  state = {
    show: "additional",
    hide: "hide",
    onLoad: "static",
    choice: 1

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
  abiability=(choice)=>{
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
    render() {
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
          <div className="center">
            <div className="card">
              <div className={this.showOrHide()}>
                <div className="more-info">
                  <div className="switch-container">
                    <div className="switcher" onClick={a => this.toggler(3)}>
                      <img src="./Icons/card-toggle-inactive.svg" alt="" />
                    </div>
                    <div>
                      <img src="./Icons/user-interaction-btn.svg"></img>
                    </div>
                  </div>
                  <div className="title-organizer">
                    <h1>
                      <span className="heading-card--main">Isaac</span>
                      <span className="heading-card--sub">
                        Graphic Designer
                      </span>
                    </h1>
                  </div>
                  <div className="user-link">
                    <span className="user-conections">
                      <img src="./Icons/copy-user-link-btn.svg" /> 1564
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
                    <img src="./Icons/user-interaction-btn.svg"></img>
                  </div>
                </div>
                <div className="middle-container">
                  <div className="middle-left">
                    <p className='header'id='about'>About</p>
                    <p>
                      Sit et voluptua erat sit lorem dolor invidunt magna.
                      Voluptua et sadipscing sadipscing erat dolor et sed, est
                      voluptua et sed dolore. Sadipscing lorem sed et eos
                      consetetur amet. Amet ipsum sed labore dolore dolores eos.
                    </p>
                  </div>
                  <div className="middle-center">
                  <p className='header'id='aval'>Avalbility</p>
                   <div className='box'>
                    <div id={this.abiability('never')}>Mon</div>
                    <div id={this.abiability('always')}>Tue</div>
                    <div id={this.abiability('never')}>Wed</div>
                    <div id={this.abiability('sometimes')}>Thu</div>
                    <div id={this.abiability('never')}>Fri</div>
                    <div id={this.abiability('always')}>Sat</div>
                    <div id={this.abiability('always')}>Sun</div>
                    </div>
                  </div>
                  <div className="middle-rigth">
                    <p className='header'>Skills</p>
                    <div className='rating'>
                      <img src="./Icons/Design.svg" alt="" />
                      <p className='level'>8</p>
                    </div>
                    <div className='rating'>
                      <img src="./Icons/Other-Misc.svg" alt="" />
                      <p className='level'>8</p>
                    </div>
                    <div className='rating'>
                      <img src="./Icons/Programming.svg" alt="" />
                      <p className='level'>8</p>
                    </div>
                    <div className='rating'>
                      <img src="./Icons/Art.svg" alt="" />
                      <p className='level'>8</p>
                    </div>
                    <div className='rating'>
                      <img src="./Icons/Audio.svg" alt="" />
                      <p className='level'>8</p>
                    </div>
                    <div className='rating'>
                      <img src="./Icons/Writing.svg" alt="" />
                      <p className='level'>8</p>
                    </div>
                  </div>
                </div>
                <div className="bottom-container">
                  <div className="user-craft">
                    Portfolio:<a href="">youaremy@favorite.link</a>
                  </div>
                  <div className="user-conections" id="conection-under">
                    <img src="./Icons/copy-user-link-btn.svg" /> 1564
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
            </div>
          </Tilt>
        )
    }
}


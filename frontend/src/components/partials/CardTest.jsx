import React, { Component } from "react";
class CardTest extends Component {
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
  render() {
    return (
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
                    <p>
                      Sit et voluptua erat sit lorem dolor invidunt magna.
                      Voluptua et sadipscing sadipscing erat dolor et sed, est
                      voluptua et sed dolore. Sadipscing lorem sed et eos
                      consetetur amet. Amet ipsum sed labore dolore dolores eos,
                      et dolor gubergren at.
                    </p>
                  </div>
                  <div className="middle-center">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                  </div>
                  <div className="middle-rigth">
                    <span>
                      <img src="./Icons/Design.svg" alt="" />
                      <p></p>
                    </span>
                    <span>
                      <img src="./Icons/Other-Misc.svg" alt="" />
                      <p>8</p>
                    </span>
                    <span>
                      <img src="./Icons/Programing.svg" alt="" />
                      <p>8</p>
                    </span>
                    <span>
                      <img src="./Icons/Art.svg" alt="" />
                      <p>8</p>
                    </span>
                    <span>
                      <img src="./Icons/Audio.svg" alt="" />
                      <p>8</p>
                    </span>
                    <span>
                      <img src="./Icons/Writing.svg" alt="" />
                      <p>8</p>
                    </span>
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
    );
  }
}

export default CardTest;

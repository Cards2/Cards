import React, { Component } from "react";
class CardTest extends Component {
  state = {
    show: "additional",
    hide: "hide",
    choice: false
  };

  showOrHide = () => {
    if (this.state.choice === true) {
      return this.state.show;
    } else {
      return this.state.hide;
    }
  };
  toggler = () => {
    this.setState({
      choice: !this.state.choice
    });
  };
  render() {
    return (
      <div>
        <div>
          <div class="center">
            <div class="card">
              <div class={this.showOrHide()}>
                <div class="more-info">
                  <div onClick={a => this.toggler()}>
                    <img src="./Icons/card-toggle-inactive.svg" alt="" />
                  </div>
                  <div>
                    <img alt='user interaction' src="./Icons/user-interaction-btn.svg"></img>
                  </div>
                </div>
              </div>
              <div class="general">
                <h1>Jane Doe</h1>
                <button onClick={this.toggler}>choice</button>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  a volutpat mauris, at molestie lacus. Nam vestibulum sodales
                  odio ut pulvinar.
                </p>
                <span class="more">Mouse over the card for more info</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardTest;

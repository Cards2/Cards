import React, { Component } from "react";
import actions from "../../services";
import Footer from "../partials/Footer";

class Profile extends Component {
  state = {
    userID: this.props.user._id,
    username: "",
    title: "",
    art: "",
    programming: "",
    design: "",
    audio: "",
    writing: "",
    about: "",
    monday: "",
    tuesday: "",
    wednesday: "",
    thursday: "",
    friday: "",
    saturday: "",
    sunday: "",
    quote: "",
    userPublicID: ""
  };

  async componentDidMount() {
    const minm = 10000;
    const maxm = 99999;
    const rdmID = (Math.floor(Math.random() * (maxm - minm + 1)) + minm);
    await this.setState({ userPublicID: rdmID });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  handleSubmit = e => {
    e.preventDefault();
    actions
      .userInfo(this.state)
      .then(userdata => {
        this.props.user({ ...userdata.data });
      })
      .catch(({ response }) => console.error(response.data));
  };

  render() {
    if (!this.props.user.email) {
      this.props.history.push("/log-in");
    }
    return (
      <div>
        <div>
          <div>Welcome {this.props.user.email}!!!</div>
          <div>
            <h1>Edit Profile</h1>

            <form onSubmit={this.handleSubmit}>
              <div>
                <label for='username'>
                  <h4>Username</h4>
                </label>
                <input
                  onChange={this.handleChange}
                  type='text'
                  name='username'
                  placeholder='Name'
                  required
                />
              </div>
              <div>
                <label for='title'>
                  <h4>Title</h4>
                </label>
                <input
                  onChange={this.handleChange}
                  type='text'
                  name='title'
                  placeholder='eg. Programmer, Artist, etc.'
                  required
                />
              </div>
              <h4>Skills</h4>
              <div>
                <label for='art'>Art/Animation</label>
                <input
                  onChange={this.handleChange}
                  type='number'
                  name='art'
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='programming'>Programming</label>
                <input
                  onChange={this.handleChange}
                  type='number'
                  name='programming'
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='design'>Design</label>
                <input
                  onChange={this.handleChange}
                  type='number'
                  name='design'
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='audio'>Audio</label>
                <input
                  onChange={this.handleChange}
                  type='number'
                  name='audio'
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='writing'>Writing</label>
                <input
                  onChange={this.handleChange}
                  type='number'
                  name='writing'
                  min='1'
                  max='10'
                  required
                ></input>
              </div>
              <div>
                <label for='about'>
                  <h4>About</h4>
                </label>
                <textarea
                  onChange={this.handleChange}
                  type='text'
                  name='about'
                  maxLength='140'
                  placeholder='Max length 140 characters'
                  required
                ></textarea>
              </div>
              <div>
                <h4>Avalibility</h4>
                <label for='monday'>Monday</label>
                <select onChange={this.handleChange} name='monday' required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='tuesday'>Tuesday</label>
                <select onChange={this.handleChange} name='tuesday' required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='wednesday'>Wednesday</label>
                <select onChange={this.handleChange} name='wednesday' required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='thursday'>Thursday</label>
                <select onChange={this.handleChange} name='thursday' required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='friday'>Friday</label>
                <select onChange={this.handleChange} name='friday' required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='saturday'>Saturday</label>
                <select onChange={this.handleChange} name='saturday' required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='sunday'>Sunday</label>
                <select onChange={this.handleChange} name='sunday' required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
              </div>
              <div>
                <label for='quote'>
                  <h4>Quote</h4>
                </label>
                <textarea
                  onChange={this.handleChange}
                  name='quote'
                  required
                ></textarea>
              </div>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Profile;

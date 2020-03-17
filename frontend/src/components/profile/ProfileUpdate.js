import React, { Component } from "react";
import actions from "../../services";
import Footer from "../partials/Footer";
// import { TimeZone } from "../partials/TimeZone";

class ProfileUpdate extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    actions
      .profileUpdate(this.props.user)
      .then(userdata => {
        this.props.user({ ...userdata.data });
      })
      .catch(({ response }) => console.error(response.data));
  };

  render() {
    if (!this.props.user.loading && !this.props.user.email) {
      this.props.history.push("/log-in");
    }
    console.log(this.props.user);
    return (
      <div>
        <div>
          <div>
            <h1>Profile Update</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label htmlFor='username'>
                  <h4>Username </h4>
                </label>
                <input
                  onChange={this.props.handleChange}
                  type='text'
                  name='username'
                  value={this.props.user.username}
                  required
                />
              </div>
              <div>
                <label htmlFor='title'>
                  <h4>Title</h4>
                </label>
                <input
                  onChange={this.props.handleChange}
                  type='text'
                  name='title'
                  value={this.props.user.title}
                  required
                />
              </div>
              <h4>Skills</h4>
              <div>
                <label htmlFor='art'>Art/Animation</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='art'
                  value={this.props.user.art}
                  min='1'
                  max='10'
                  required
                ></input>
                <label htmlFor='programming'>Programming</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='programming'
                  value={this.props.user.programming}
                  min='1'
                  max='10'
                  required
                ></input>
                <label htmlFor='design'>Design</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='design'
                  value={this.props.user.design}
                  min='1'
                  max='10'
                  required
                ></input>
                <label htmlFor='audio'>Audio</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='audio'
                  value={this.props.user.audio}
                  min='1'
                  max='10'
                  required
                ></input>
                <label htmlFor='writing'>Writing</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='writing'
                  value={this.props.user.writing}
                  min='1'
                  max='10'
                  required
                ></input>
              </div>
              <div>
                <h4>Avalibility</h4>
                <label htmlFor='monday'>Monday</label>
                <select
                  onChange={this.props.handleChange}
                  name='monday'
                  value={this.props.user.monday}
                  required
                >
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label htmlFor='tuesday'>Tuesday</label>
                <select
                  onChange={this.props.handleChange}
                  name='tuesday'
                  value={this.props.user.tuesday}
                  required
                >
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label htmlFor='wednesday'>Wednesday</label>
                <select
                  onChange={this.props.handleChange}
                  name='wednesday'
                  value={this.props.user.wednesday}
                  required
                >
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label htmlFor='thursday'>Thursday</label>
                <select
                  onChange={this.props.handleChange}
                  name='thursday'
                  value={this.props.user.thursday}
                  required
                >
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label htmlFor='friday'>Friday</label>
                <select
                  onChange={this.props.handleChange}
                  name='friday'
                  value={this.props.user.friday}
                  required
                >
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label htmlFor='saturday'>Saturday</label>
                <select
                  onChange={this.props.handleChange}
                  name='saturday'
                  value={this.props.user.saturday}
                  required
                >
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label htmlFor='sunday'>Sunday</label>
                <select
                  onChange={this.props.handleChange}
                  name='sunday'
                  value={this.props.user.sunday}
                  required
                >
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
              </div>
              <div>
                <label htmlFor='about'>
                  <h4>About</h4>
                </label>
                <textarea
                  onChange={this.props.handleChange}
                  type='text'
                  name='aboutMe'
                  value={this.props.user.aboutMe}
                  maxLength='140'
                  required
                ></textarea>
                {/* <TimeZone /> */}
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

export default ProfileUpdate;

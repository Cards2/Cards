import React, { Component } from "react";
import actions from "../../services";
import Footer from "../partials/Footer";

class ProfileUpdate extends Component {
  state = {
  };

componentDidMount(){
    this.setState( this.props.user );
    console.log(this.state);
  }

  // handleChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  handleSubmit = e => {
    e.preventDefault();
    actions
      .profileUpdate(this.props.user)
      .then(userdata => {
        console.log(userdata)
        this.props.user({ ...userdata.data });
      })
      .catch(({ response }) => console.error(response.data));
      };

  render() {
    if (!this.props.user) {
      this.props.history.push("/log-in");
    }
    console.log(this.props)
    return (
      <div>
        <div>
          {/* <div>Welcome Drrr!!!</div> */}
          <div>
            <h1>Edit Profile</h1>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label for='username'>
                  <h4>Username </h4>
                </label>
                <input
                  onChange={this.props.handleChange}
                  type='text'
                  name='username'
                  // value={this.props.user.username}
                  value={this.props.user.username}
                  required
                /> 
              </div>
              <div>
                <label for='title'>
                  <h4>Title</h4>
                </label>
                <input
                  onChange={this.props.handleChange}
                  type='text'
                  name='title'
                  // value={this.props.user.title}
                  value={this.props.user.title}
                  required
                />
              </div>
              <h4>Skills</h4>
              <div>
                <label for='art'>Art/Animation</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='art'
                  value={this.props.user.art}
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='programming'>Programming</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='programming'
                  value={this.props.user.programming}
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='design'>Design</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='design'
                  value={this.props.user.design}
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='audio'>Audio</label>
                <input
                  onChange={this.props.handleChange}
                  type='number'
                  name='audio'
                  value={this.props.user.audio}
                  min='1'
                  max='10'
                  required
                ></input>
                <label for='writing'>Writing</label>
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
                <label for='about'>
                  <h4>About</h4>
                </label>
                <textarea
                  onChange={this.props.handleChange}
                  type='text'
                  name='about'
                  value={this.props.user.about}
                  maxLength='140'
                  required
                ></textarea>
              </div>
              <div>
                <h4>Avalibility</h4>
                <label for='monday'>Monday</label>
                <select onChange={this.props.handleChange} name='monday' value={this.props.user.monday} required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='tuesday'>Tuesday</label>
                <select onChange={this.props.handleChange} name='tuesday' value= {this.props.user.tuesday} required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='wednesday'>Wednesday</label>
                <select onChange={this.props.handleChange} name='wednesday' value={this.props.user.wednesday} required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='thursday'>Thursday</label>
                <select onChange={this.props.handleChange} name='thursday' value={this.props.user.thursday} required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='friday'>Friday</label>
                <select onChange={this.props.handleChange} name='friday' value={this.props.user.friday} required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='saturday'>Saturday</label>
                <select onChange={this.props.handleChange} name='saturday' value={this.props.user.saturday} required>
                  <option value='none' selected disabled hidden>
                    Select an Option
                  </option>
                  <option value='always'>Always</option>
                  <option value='sometimes'>Sometimes</option>
                  <option value='never'>Never</option>
                </select>
                <label for='sunday'>Sunday</label>
                <select onChange={this.props.handleChange} name='sunday' value={this.props.user.sunday} required>
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
                  onChange={this.props.handleChange}
                  name='quote'
                  value={this.props.user.quote}
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

export default ProfileUpdate;

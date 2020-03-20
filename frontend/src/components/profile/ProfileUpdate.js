import React, { Component } from "react";
import actions from "../../services";
import { TimeZone } from "../partials/TimeZone";

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
    // console.log(this.props)
    if (!this.props.user.loading && !this.props.user.email) {
      this.props.history.push("/log-in");
    }
    return (
      <div>

      { this.props.user.email?
      
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
            <label htmlFor='timezone'>
              <h4>Timezone</h4>
            </label>
            <TimeZone
              handleChange={this.props.handleChange}
              user={this.props.user}
            />
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
              <label htmlFor='portfolio'>
                <h4>Portfolio</h4>
              </label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='portfolio'
                value={this.props.user.portfolio}
                required
              />
            </div>
            <div>
        <label>
          <h4>Contact</h4>
        </label>
        <input
          onChange={this.props.handleChange}
          type='text'
          name='contact'
          value={this.props.user.contact}
        />
      </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
        
      </div>

      :
      <div>
        <h1> loading </h1>
      </div>

      
      }  
        
      {/* <div className='profile-update-container'>
        <div className='profile-update-left'>
          <div className='card-container'>
            <h1>This is where the card goes</h1>
          </div>
        </div>
          <div className='profile-update-right'>
            <div className='profile-update-title'>
              <h2>Update your profile here!</h2>
            </div>
            <div className='form-container'>
              <form onSubmit={this.handleSubmit}>
                <h3>Username </h3>
                <div>
                  <input
                    onChange={this.props.handleChange}
                    type='text'
                    name='username'
                    value={this.props.user.username}
                    required
                  />
                </div>
                <h3>Title</h3>
                <div>
                  <input
                    onChange={this.props.handleChange}
                    type='text'
                    name='title'
                    value={this.props.user.title}
                    required
                  />
                </div>
                <h3>Skills</h3>
                <div className='profile-update-skills'>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                </div>
                <h3>Avalibility</h3>
                <div className='profile-update-avalibility'>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                  </div>
                  <div>
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
                </div>
                <h3>Timezone</h3>
                <div>
                  <TimeZone
                    handleChange={this.props.handleChange}
                    user={this.props.user}
                  />
                </div>
                <h3>About</h3>
                <div>
                  <textarea
                    onChange={this.props.handleChange}
                    type='text'
                    name='aboutMe'
                    value={this.props.user.aboutMe}
                    maxLength='140'
                    required
                  ></textarea>
                </div>
                <h3>Portfolio</h3>
                <div>
                  <input
                    onChange={this.props.handleChange}
                    type='text'
                    name='portfolio'
                    value={this.props.user.portfolio}
                    required
                  />
                </div>
                <h3>Contact</h3>
                <div>
                  <input
                    onChange={this.props.handleChange}
                    type='text'
                    name='contact'
                    value={this.props.user.contact}
                  />
                </div>
                <div className='profile-update-submit'>
                  <button type='submit'>Submit</button>
                </div>
              </form>
            </div>
          </div>
      </div>
     */}
    
    </div>

    );
  }
}

export default ProfileUpdate;

import React from 'react';

    return (
      <div>
        <div>Welcome {this.props.user.email}!!!</div>
        <div>
          <h1>Edit Profile</h1>
          <form method='post'>
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
                id='quantity'
                name='art'
                min='1'
                max='10'
                required
              ></input>
              <label for='programming'>Programming</label>
              <input
                onChange={this.handleChange}
                type='number'
                id='quantity'
                name='programming'
                min='1'
                max='10'
                required
              ></input>
              <label for='design'>Design</label>
              <input
                onChange={this.handleChange}
                type='number'
                id='quantity'
                name='design'
                min='1'
                max='10'
                required
              ></input>
              <label for='audio'>Audio</label>
              <input
                onChange={this.handleChange}
                type='number'
                id='quantity'
                name='audio'
                min='1'
                max='10'
                required
              ></input>
              <label for='writing'>Writing</label>
              <input
                onChange={this.handleChange}
                type='number'
                id='quantity'
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
                name='about'
                maxLength='140'
                placeholder='Max length 140 characters'
                required
              ></textarea>
            </div>
            <div>
              <h4>Avalibility</h4>
              <label for='monday'>Monday</label>
              <select onChange={this.handleChange} id='monday' name='monday'>
                <option value='always'>Always</option>
                <option value='sometimes'>Sometimes</option>
                <option value='never'>Never</option>
              </select>
              <label for='tuesday'>Tuesday</label>
              <select onChange={this.handleChange} id='tuesday' name='tuesday'>
                <option value='always'>Always</option>
                <option value='sometimes'>Sometimes</option>
                <option value='never'>Never</option>
              </select>
              <label for='wednesday'>Wednesday</label>
              <select
                onChange={this.handleChange}
                id='wednesday'
                name='wednesday'
              >
                <option value='always'>Always</option>
                <option value='sometimes'>Sometimes</option>
                <option value='never'>Never</option>
              </select>
              <label for='thursday'>Thursday</label>
              <select
                onChange={this.handleChange}
                id='thursday'
                name='thursday'
              >
                <option value='always'>Always</option>
                <option value='sometimes'>Sometimes</option>
                <option value='never'>Never</option>
              </select>
              <label for='friday'>Friday</label>
              <select onChange={this.handleChange} id='friday' name='friday'>
                <option value='always'>Always</option>
                <option value='sometimes'>Sometimes</option>
                <option value='never'>Never</option>
              </select>
              <label for='saturday'>Saturday</label>
              <select
                onChange={this.handleChange}
                id='saturday'
                name='saturday'
              >
                <option value='always'>Always</option>
                <option value='sometimes'>Sometimes</option>
                <option value='never'>Never</option>
              </select>
              <label for='sunday'>Sunday</label>
              <select onChange={this.handleChange} id='sunday' name='sunday'>
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
    );
  }
}

export default Profile;

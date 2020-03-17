import React, { Component } from "react";
import actions from "../../services";
//import Footer from "../partials/Footer";
import Tilt from "react-tilt";

class Profile extends Component {
  state = {};

  profilescreen1 = () => {
    if (!this.state.screen1)
      return (
        <>
          <Tilt
            className='card Tilt'
            options={{ max: 15 }}
            style={{
              height: 220,
              width: 350,
              transformStyle: "preserve-3d",
              backgroundImage: `url(${"https://images.pexels.com/photos/1083822/pexels-photo-1083822.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"})`,
              backgroundSize: "cover",
              borderRadius: "6px"
            }}
          >
            <div className='Tilt-inner innerCard'>
              {" "}
              <h1 className='cardName'>{this.props.user.username}</h1>
              <h3 className='cardTitle'>{this.props.user.title} </h3>{" "}
            </div>
          </Tilt>
          <div>
            <h2 style={{ color: "white", padding: 5 }}> Hi There! </h2>
            <h1 style={{ color: "white", padding: 5 }}>
              {" "}
              Now that you're a part of the Card community, lets make your
              card!!{" "}
            </h1>
            <h2 style={{ color: "white", padding: 5 }}>
              Your card is like a tiny resume! it'll help other users determine
              if you're a good fit for their team! lets start with the basics
              (don't worry you can change all of this later){" "}
            </h2>
            <label>
              <h4>Username</h4>
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
            <label>
              <h4>Title</h4>
            </label>
            <input
              onChange={this.props.handleChange}
              type='text'
              name='title'
              placeholder='eg. Programmer, Artist, etc.'
              required
            />
          </div>
          <br></br>
          <button onClick={this.transition1}> NEXT </button>
        </>
      );
  };

  transition1 = () => {
    this.setState({ screen1: true })
    actions.userInteraction(this.props.user)
            .then(userdata => {
                  })
                  .catch(({ response }) => console.error(response.data));
        };

  screen2 = () => {
    if (this.state.screen1 && !this.state.screen2)
      return (
        <>
          <h1 style={{ color: "white", padding: 5 }}> Nice!</h1>
          <h1 style={{ color: "white", padding: 5 }}> So far, so good.</h1>

          <h2 style={{ color: "white", padding: 5 }}>
            Now is the time to test your humility!{" "}
          </h2>
          <h2 style={{ color: "white", padding: 5 }}>
            Rank yourself 1 - 10 in the following skills so that users have a
            better idea where your sick talents lies{" "}
          </h2>

          <h2 style={{ color: "white", padding: 5 }}>
            remember; humility (or not){" "}
          </h2>
          <div>
            <label for='art'>Art/Animation</label>
            <input
              onChange={this.props.handleChange}
              type='number'
              name='art'
              min='1'
              max='10'
              required
            ></input>
            <label for='programming'>Programming</label>
            <input
              onChange={this.props.handleChange}
              type='number'
              name='programming'
              min='1'
              max='10'
              required
            ></input>
            <label for='design'>Design</label>
            <input
              onChange={this.props.handleChange}
              type='number'
              name='design'
              min='1'
              max='10'
              required
            ></input>
            <label for='audio'>Audio</label>
            <input
              onChange={this.props.handleChange}
              type='number'
              name='audio'
              min='1'
              max='10'
              required
            ></input>
            <label for='writing'>Writing</label>
            <input
              onChange={this.props.handleChange}
              type='number'
              name='writing'
              min='1'
              max='10'
              required
            ></input>
          </div>
          <br></br>
          <button onClick={this.transition2}> NEXT </button>
        </>
      );
  };

  transition2 = () => {
    this.setState({ screen2: true });
  };

  screen3 = () => {
    if (this.state.screen2 && !this.state.screen3)
      return (
        <>
          <h2 style={{ color: "white", padding: 5 }}>
            {" "}
            You're halfway done :)
          </h2>
          <h1 style={{ color: "white", padding: 5 }}> Lets keep going.</h1>

          <h3 style={{ color: "white", padding: 5 }}>
            Finding someone to work with is great - but it's not so great if you
            can't find time to work together{" "}
          </h3>

          <h3 style={{ color: "white", padding: 5 }}>
            Fill out this section to help others know when you'll be around{" "}
          </h3>
          <div>
            <h4>Avalibility</h4>
            <label for='monday'>Monday</label>
            <select onChange={this.props.handleChange} name='monday' required>
              <option value='none' selected disabled hidden>
                Select an Option
              </option>
              <option value='always'>Always</option>
              <option value='sometimes'>Sometimes</option>
              <option value='never'>Never</option>
            </select>
            <label for='tuesday'>Tuesday</label>
            <select onChange={this.props.handleChange} name='tuesday' required>
              <option value='none' selected disabled hidden>
                Select an Option
              </option>
              <option value='always'>Always</option>
              <option value='sometimes'>Sometimes</option>
              <option value='never'>Never</option>
            </select>
            <label for='wednesday'>Wednesday</label>
            <select
              onChange={this.props.handleChange}
              name='wednesday'
              required
            >
              <option value='none' selected disabled hidden>
                Select an Option
              </option>
              <option value='always'>Always</option>
              <option value='sometimes'>Sometimes</option>
              <option value='never'>Never</option>
            </select>
            <label for='thursday'>Thursday</label>
            <select onChange={this.props.handleChange} name='thursday' required>
              <option value='none' selected disabled hidden>
                Select an Option
              </option>
              <option value='always'>Always</option>
              <option value='sometimes'>Sometimes</option>
              <option value='never'>Never</option>
            </select>
            <label for='friday'>Friday</label>
            <select onChange={this.props.handleChange} name='friday' required>
              <option value='none' selected disabled hidden>
                Select an Option
              </option>
              <option value='always'>Always</option>
              <option value='sometimes'>Sometimes</option>
              <option value='never'>Never</option>
            </select>
            <label for='saturday'>Saturday</label>
            <select onChange={this.props.handleChange} name='saturday' required>
              <option value='none' selected disabled hidden>
                Select an Option
              </option>
              <option value='always'>Always</option>
              <option value='sometimes'>Sometimes</option>
              <option value='never'>Never</option>
            </select>
            <label for='sunday'>Sunday</label>
            <select onChange={this.props.handleChange} name='sunday' required>
              <option value='none' selected disabled hidden>
                Select an Option
              </option>
              <option value='always'>Always</option>
              <option value='sometimes'>Sometimes</option>
              <option value='never'>Never</option>
            </select>
          </div>
          <br></br>
          <div>
            <label for='timezone'>
              <h4>TimeZone</h4>
            </label>
            <textarea
              onChange={this.props.handleChange}
              name='timezone'
              // required
            ></textarea>
          </div>

          <button onClick={this.transition3}> NEXT </button>
        </>
      );
  };

  transition3 = () => {
    this.setState({ screen3: true });
  };

  screen4 = () => {
    if (this.state.screen3)
      return (
        <>
          <h2 style={{ color: "white", padding: 5 }}>
            {" "}
            It's all coming together
          </h2>
          <h1 style={{ color: "white", padding: 5 }}>
            Tells us about yourself.{" "}
          </h1>

          <h3 style={{ color: "white", padding: 5 }}>
            You have name and the skills but... who are you?{" "}
          </h3>

          <div>
            <label>
              <h4>About Me</h4>
            </label>
            <input
              onChange={this.props.handleChange}
              type='text'
              name='aboutMe'
              placeholder='About Me'
              // required
            />
          </div>
          <div>
            <label>
              <h4>Portfolio</h4>
            </label>
            <input
              onChange={this.props.handleChange}
              type='text'
              name='portfolio'
              placeholder='Portfolio'
              // required
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
              placeholder='Contact'
              // required
            />
          </div>
          <button type='submit'>Submit</button>
        </>
      );
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.props.user);
    actions
      .userInfo(this.props.user)
      .then(userdata => {
        this.props.history.push("/search");
      })
      .catch(({ response }) => console.error(response));
  };

  render() {
    if (!this.props.user.loading && !this.props.user.email) {
      this.props.history.push("/log-in");
    }
    return (
      <div>
        <div>
          <div>
            <h1>New Profile</h1>
            <form onSubmit={this.handleSubmit}>
              {this.profilescreen1()}
              {this.screen2()}
              {this.screen3()}
              {this.screen4()}
            </form>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Profile;

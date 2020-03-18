import React, { Component } from "react";
import actions from "../../services";

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

class Projects extends Component {
  state = {
    userID: this.props.user._id,
    projectTitle: "",
    description: "",
    startDate: "",
    endDate: "",
    status: "",
    artPositions: "",
    designPositions: "",
    programmingPositions: "",
    writingPositions: "",
    soundPositions: ""
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    actions
      .projectInfo(this.state)
      .then(projectdata => {
        this.props.user({ ...projectdata.data });
      })
      .catch(({ response }) => console.error(response.data));
  };

  render() {
    if (!this.props.user.email) {
      this.props.history.push("/log-in");
    }
    // console.log(this.props.user._id);
    return (
      <div>
        <h3>Welcome {this.props.user.email}!!!</h3>
        <div>
          <h1>Add Project</h1>

          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor='title'>
                <h4>Project Title</h4>
              </label>
              <input
                onChange={this.handleChange}
                type='text'
                name='projectTitle'
                placeholder='Project Title'
                required
              />
            </div>
            <div>
              <label htmlFor='description'>
                <h4>Project Description</h4>
              </label>
              <input
                onChange={this.handleChange}
                type='text'
                name='description'
                placeholder='Project Description'
                required
              />
            </div>
            <div>
              <label htmlFor='startDate'>
                <h4>Start date:</h4>
              </label>
              <input
                onChange={this.handleChange}
                type='date'
                name='startDate'
                //min='2000-01-01'
                //max={today}
              />
            </div>
            <div>
              <label htmlFor='endDate'>
                <h4>Anticipated End date:</h4>
              </label>
              <input
                onChange={this.handleChange}
                type='date'
                name='endDate'
                //min={today}
                //max='2030-01-01'
              />
            </div>
            <label htmlFor='status'>
              <h4>Project Status</h4>
            </label>
            <select onChange={this.handleChange} defaultValue='none' name='status' required>
              <option value='none' disabled hidden>
                Select an Option
              </option>
              <option value='proposed'>Proposed</option>
              <option value='inProduction'>In Production</option>
              <option value='onHold'>On Hold</option>
              <option value='compleated'>Compleated</option>
            </select>
            <div>
              <h4>Needed Roles</h4>
              <label htmlFor='artPositions'>Artists/Animators</label>
              <input
                onChange={this.handleChange}
                type='number'
                name='artPositions'
                min='0'
                max='5'
                required
              />
              <label htmlFor='designPositions'>Designers</label>
              <input
                onChange={this.handleChange}
                type='number'
                name='designPositions'
                min='0'
                max='5'
                required
              />
              <label htmlFor='programmingPositions'>Programmers</label>
              <input
                onChange={this.handleChange}
                type='number'
                name='programmingPositions'
                min='0'
                max='5'
                required
              />
              <label htmlFor='writingPositions'>Writers</label>
              <input
                onChange={this.handleChange}
                type='number'
                name='writingPositions'
                min='0'
                max='5'
                required
              />
              <label htmlFor='soundPositions'>Sound Designers</label>
              <input
                onChange={this.handleChange}
                type='number'
                name='soundPositions'
                min='0'
                max='5'
                required
              />
            </div>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Projects;

import React, { Component } from "react";
import actions from "../../services";

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

class ProjectUpdate extends Component {
  state = {};

  handleSubmit = e => {
    e.preventDefault();
    actions
      .projectUpdate(this.props.user)
      .then(projectdata => {
        this.props.user({ ...projectdata.data });
      })
      .catch(({ response }) => console.error(response.data));
  };

  render() {
    if (!this.props.user.loading && !this.props.user.email) {
      this.props.history.push("/log-in");
    }
    return (
      <div>
        <h3>Welcome {this.props.user.email}!!!</h3>
        <div>
          <h1>Edit project</h1>

          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor='title'>
                <h4>Project Title</h4>
              </label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='projectTitle'
                value={this.props.user.projectTitle}
                required
              />
            </div>
            <div>
              <label htmlFor='description'>
                <h4>Project Description</h4>
              </label>
              <input
                onChange={this.props.handleChange}
                type='text'
                name='description'
                value={this.props.user.description}
                required
              />
            </div>
            <div>
              <label htmlFor='startDate'>
                <h4>Start date:</h4>
              </label>
              <input
                onChange={this.props.handleChange}
                type='date'
                name='startDate'
                min='2000-01-01'
                max={today}
                value={this.props.user.startDate}
              />
            </div>
            <div>
              <label htmlFor='endDate'>
                <h4>Anticipated End date:</h4>
              </label>
              <input
                onChange={this.props.handleChange}
                type='date'
                name='endDate'
                min={today}
                max='2030-01-01'
                value={this.props.user.endDate}
              />
            </div>
            <label htmlFor='status'>
              <h4>Project Status</h4>
            </label>
            <select
              onChange={this.props.handleChange}
              name='status'
              value={this.props.user.status}
              required
            >
              <option value='proposed'>Proposed</option>
              <option value='inProduction'>In Production</option>
              <option value='onHold'>On Hold</option>
              <option value='compleated'>Compleated</option>
            </select>
            <div>
              <h4>Needed Roles</h4>
              <label htmlFor='artPositions'>Artists/Animators</label>
              <input
                onChange={this.props.handleChange}
                type='number'
                name='artPositions'
                min='0'
                max='5'
                value={this.props.user.artPositions}
                required
              />
              <label htmlFor='designPositions'>Designers</label>
              <input
                onChange={this.props.handleChange}
                type='number'
                name='designPositions'
                min='0'
                max='5'
                value={this.props.user.designPositions}
                required
              />
              <label htmlFor='programmingPositions'>Programmers</label>
              <input
                onChange={this.props.handleChange}
                type='number'
                name='programmingPositions'
                min='0'
                max='5'
                value={this.props.user.programmingPositions}
                required
              />
              <label htmlFor='writingPositions'>Writers</label>
              <input
                onChange={this.props.handleChange}
                type='number'
                name='writingPositions'
                min='0'
                max='5'
                value={this.props.user.writingPositions}
                required
              />
              <label htmlFor='soundPositions'>Sound Designers</label>
              <input
                onChange={this.props.handleChange}
                type='number'
                name='soundPositions'
                min='0'
                max='5'
                value={this.props.user.soundPositions}
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

export default ProjectUpdate;

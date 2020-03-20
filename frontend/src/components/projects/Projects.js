import React, { Component } from "react";
import actions from "../../services";
import Card from "../partials/Card";

let today = new Date();
const dd = String(today.getDate()).padStart(2, "0");
const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
const yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

class Projects extends Component {
  state = {
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
    console.log(this.state);
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
      this.props.history.push("/");
    }
    return (
      <div>
        <h3>Welcome {this.props.user.email}!!!</h3>
        
        <div className="profile-update-container">
          <div className="profile-update-left">
            <div className="card-container">
              <Card CurrentCard={this.props.user} />
            </div>
          </div>
          <div className="profile-update-right">
          <div className='profile-update-title'>
          <h1>Add Project</h1>
              </div>
              <div id='project-form-container' className='form-container'>
            <form className='project-form' onSubmit={this.handleSubmit}>
              <div className='project-form-item'>
                <label htmlFor="projectTitle">
                  <h4>Project Title</h4>
                </label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="projectTitle"
                  placeholder="Project Title"
                  required
                />
              </div>
              <div className='project-form-item'>
                <label htmlFor="description">
                  <h4>Project Description</h4>
                </label>
                <input
                  onChange={this.handleChange}
                  type="text"
                  name="description"
                  placeholder="Project Description"
                  required
                />
              </div >
              <div className='project-form-item' >
                <label htmlFor="startDate">
                  <h4>Start date:</h4>
                </label>
                <input
                  onChange={this.handleChange}
                  type="date"
                  name="startDate"
                  //min='2000-01-01'
                  //max={today}
                />
              </div>
              <div className='project-form-item'>
                <label htmlFor="endDate">
                  <h4>Anticipated End date:</h4>
                </label>
                <input
                  onChange={this.handleChange}
                  type="date"
                  name="endDate"
                  //min={today}
                  //max='2030-01-01'
                />
              </div>
              <label htmlFor="status">
                <h4>Project Status</h4>
              </label>
              <select
                onChange={this.handleChange}
                defaultValue="none"
                name="status"
                required
              >
                <option value="none" disabled hidden>
                  Select an Option
                </option>
                <option value="proposed">Proposed</option>
                <option value="inProduction">In Production</option>
                <option value="onHold">On Hold</option>
                <option value="compleated">Compleated</option>
              </select>
              <div className='needed-role' >
                <div className='needed-role-tag'>
                <h4>Needed Roles</h4>
                </div>
                <div className='needed-role-amount'>
                  <div className='needed-role-amount-item'>
                <label htmlFor="artPositions">Artists</label>
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="artPositions"
                  min="0"
                  max="5"
                  required
                />
                </div>
                <div className='needed-role-amount-item'>
                <label htmlFor="designPositions">Designers</label>
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="designPositions"
                  min="0"
                  max="5"
                  required
                />
                </div>
                <div className='needed-role-amount-item'>
                <label htmlFor="programmingPositions">Programmers</label>
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="programmingPositions"
                  min="0"
                  max="5"
                  required
                />
                </div>
                <div className='needed-role-amount-item'>
                <label htmlFor="writingPositions">Writers</label>
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="writingPositions"
                  min="0"
                  max="5"
                  required
                />
                </div>
                <div className='needed-role-amount-item'>
                <label htmlFor="soundPositions">Sound Designers</label>
                <input
                  onChange={this.handleChange}
                  type="number"
                  name="soundPositions"
                  min="0"
                  max="5"
                  required
                />
                </div>
                </div>
              </div>
              <div  className='profile-update-submit'>
              <button  type="submit">Submit</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;

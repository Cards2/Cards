import React, { Component } from "react";
import Tilt from "react-tilt";

class ProjectCard extends Component {
    state={}
    async componentDidMount(){
        this.setState({...this.props.CurrentCard})
      }

  render() {
    return (
      <Tilt
        className="card Tilt"
        options={{ max: 15 }}
        style={{
          height: 220,
          width: 350,
          transformStyle: "preserve-3d",

          backgroundSize: "cover",
          borderRadius: "6px"
        }}
      >
        <div className="center">
          <div className="card">
            <div id='project-bk-card' className="static">
              <div className="title-organizer">
                <h1>
                  <span className="heading-card--main">
                    Card Match
                  </span>
                  <span className="heading-card--sub">A Creative Team Network</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    );
  }
}

export default ProjectCard;

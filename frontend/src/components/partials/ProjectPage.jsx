import React, { Component } from "react";
import Card from "./Card";

class ProjectPage extends Component {
  render() {
    return (
      <div className="p-page">
        <div className="project-img">
          <div className="project-img-bk" />
          <div className="list-box">
            <div className="master-list">
              <div className="info-list">
                Status<p className="info-list-text">Active</p>
              </div>
              <div className="info-list">
                Start Date<p className="info-list-text">03/19/2020</p>
              </div>
              <div className="info-list">
                End Date<p className="info-list-text">03/20/2020</p>
              </div>
              <div className="info-list">
                Link<p className="info-list-text">cardswap.netfly.com</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="backofinfo " id='requirements'>
              <div className='backofinfo-tagname'>Slots</div>
            <div className='backofinfo-item'>
              <img src="./Icons/art-white.svg" alt="icon" />
              <div>
                4/5
              </div>
            </div>
            <div className='backofinfo-item'>
              <img src="./Icons/writing-white.svg" alt="icon" />
              <div>
                4/5
              </div>
            </div>
            <div className='backofinfo-item'>
              <img src="./Icons/audio-white.svg" alt="icon" />
              <div>
                4/5
              </div>
            </div>
            <div className='backofinfo-item'>
              <img src="./Icons/design-white.svg" alt="icon" />
              <div>
                4/5
              </div>
            </div>
            <div className='backofinfo-item'>
              <img src="./Icons/misc-white.svg" alt="icon" />
              <div>
                4/5
              </div>
            </div>
          </div>
          <div  id='backofinfo-info' className="backofinfo">
              <div>Description</div>
            <p>Invidunt erat et sit voluptua ipsum lorem clita sea. Invidunt no nonumy et diam et et elitr, aliquyam no takimata amet no stet dolores sit takimata amet. Sed takimata amet diam et accusam ea, clita lorem at kasd labore sadipscing, sed takimata est duo voluptua lorem at dolor no, ipsum.
                <br></br>
                Invidunt erat et sit voluptua ipsum lorem clita sea. Invidunt no nonumy et diam et et elitr, aliquyam no takimata amet no stet dolores sit takimata amet. Sed takimata amet diam et accusam ea, clita lorem at kasd labore sadipscing, sed takimata est duo voluptua lorem at dolor no, ipsum.
         </p> 
          </div>
          <div className="owner-card">
              <div className='owner-card-tagname'>Project Owner</div>
              <Card/>
          </div>
          <div id='imgofproject-box'>
              <div id='imgofproject-tagname'>Project Img</div>
              <div id='imgofproject' className='backofinfo'>IMG</div>
              <div id='imgofproject' className='backofinfo'>IMG</div>
              <div id='imgofproject' className='backofinfo'>IMG</div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default ProjectPage;

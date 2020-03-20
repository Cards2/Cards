import React, { Component } from "react";
import Tilt from "react-tilt";
import actions from "../../services/index";

class SearchProjects extends Component {
  state = {};

  callProjects = () => {
    actions
      .allProjectQuery()
      .then(project => {
        console.log(project.data);
        // this.state.setUser({ ...project.data });
      })
      .catch(response => console.error(response.data));
  };

  allCardsTilt = () => {
    if (this.props.generalstate.allProjects) {
      return this.props.generalstate.allProjects.map(eachproject => {
        return (
          <div>
            <Tilt
              className='card Tilt'
              options={{ max: 15 }}
              style={{
                height: 220,
                width: 350,
                transformStyle: "preserve-3d",
                backgroundSize: "cover",
                borderRadius: "6px"
              }}
            >
              <div className='Tilt-inner innerCard'>
                <div>
                  <div>
                    <div className='center'>
                      <div className='card'>
                        {/* <div className={this.showOrHide()}>
                          <div className='more-info'>
                            <div className='switch-container'>
                              <div
                                className='switcher'
                                onClick={a => this.toggler(3)}
                              >
                                <img
                                  src='./Icons/card-toggle-inactive.svg'
                                  alt=''
                                />
                              </div>
                              <div>
                                <input
                                  type='image'
                                  alt='add user'
                                  src='./Icons/user-interaction-btn.svg'
                                  onClick={this.adduser}
                                  name='requestedCards'
                                  value={eachproject._id}
                                ></input>
                              </div>
                            </div>
                            <div className='title-organizer'>
                              <h1>
                                <span className='heading-card--main'>
                                  {eachproject.username}{" "}
                                </span>
                                <span className='heading-card--sub'>
                                  {eachproject.title}{" "}
                                </span>
                              </h1>
                            </div>
                            <div className='user-link'>
                              <span className='user-conections'>
                                <img
                                  alt='copy user link'
                                  src='./Icons/copy-user-link-btn.svg'
                                />{" "}
                                1564
                              </span>
                            </div>
                          </div>
                        </div>
                        <div class='general'>
                          <div id='under' className='switch-container'>
                            <div className='at'>
                              <img src='./Icons/user-contact-btn.svg' alt='' />
                            </div>
                            <div
                              className='switcher'
                              onClick={a => this.toggler(2)}
                            >
                              <img
                                src='./Icons/card-toggle-active.svg'
                                alt=''
                              />
                            </div>
                            <div>
                              <input
                                type='image'
                                alt='user interaction button'
                                src='./Icons/user-interaction-btn.svg'
                                onClick={this.adduser}
                                name='requestedCards'
                                value={eachproject._id}
                              ></input>
                            </div>
                          </div>
                          <div className='middle-container'>
                            <div className='middle-left'>
                              <p className='header' id='about'>
                                About
                              </p>
                              <p>{eachproject.aboutMe}</p>
                            </div>
                            <div className='middle-center'>
                              <p className='header' id='aval'>
                                Avalbility
                              </p>
                              <div className='box'>
                                <div
                                  id={this.availability(`${eachproject.monday}`)}
                                >
                                  Mon
                                </div>
                                <div
                                  id={this.availability(`${eachproject.tuesday}`)}
                                >
                                  Tue
                                </div>
                                <div
                                  id={this.availability(
                                    `${eachproject.wednesday}`
                                  )}
                                >
                                  Wed
                                </div>
                                <div
                                  id={this.availability(`${eachproject.thrusday}`)}
                                >
                                  Thu
                                </div>
                                <div
                                  id={this.availability(`${eachproject.friday}`)}
                                >
                                  Fri
                                </div>
                                <div
                                  id={this.availability(`${eachproject.saturday}`)}
                                >
                                  Sat
                                </div>
                                <div
                                  id={this.availability(`${eachproject.sunday}`)}
                                >
                                  Sun
                                </div>
                              </div>
                            </div>
                            <div className='middle-rigth'>
                              <p className='header'>Skills</p>
                              <div className='rating'>
                                <img src='./Icons/Design.svg' alt='' />
                                <p className='level'> {eachproject.design} </p>
                              </div>
                              <div className='rating'>
                                <img src='./Icons/Other-Misc.svg' alt='' />
                                <p className='level'> {eachproject.design} </p>
                              </div>
                              <div className='rating'>
                                <img src='./Icons/Programming.svg' alt='' />
                                <p className='level'>
                                  {" "}
                                  {eachproject.programming}{" "}
                                </p>
                              </div>
                              <div className='rating'>
                                <img src='./Icons/Art.svg' alt='' />
                                <p className='level'> {eachproject.art} </p>
                              </div>
                              <div className='rating'>
                                <img src='./Icons/Audio.svg' alt='' />
                                <p className='level'> {eachproject.audio} </p>
                              </div>
                              <div className='rating'>
                                <img src='./Icons/Writing.svg' alt='' />
                                <p className='level'> {eachproject.design} </p>
                              </div>
                            </div>
                          </div>
                          <div className='bottom-container'>
                            <div className='user-craft'>
                              Portfolio:
                              <a href='{eachproject.portfolio}'>
                                {eachproject.portfolio}
                              </a>
                            </div>
                            <div
                              className='user-conections'
                              id='conection-under'
                            >
                              <img
                                alt='copy user link button'
                                src='./Icons/copy-user-link-btn.svg'
                              />{" "}
                              1564
                            </div>
                          </div>
                        </div>*/}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tilt>
          </div>
        );
      });
    }
  };

  render() {
    // console.log(this.props.generalstate);
    return (
      <div className='searchPage'>
        <div className='searchBar'> </div>
        {this.allCardsTilt()}
        {this.callProjects()}
      </div>
    );
  }
}

export default SearchProjects;

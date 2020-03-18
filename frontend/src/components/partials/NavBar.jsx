import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <NavLink id='navbar-logo' className='heading-primary--main' to='/'>Card</NavLink>
        <div className='navbar-bar'></div>

        {this.props.email ? ( // this is a terniaty to decide what to display in reference to the user choice
          <Fragment>
            {/* <NavLink to='/profile'>Profile</NavLink> */}
            {/* <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/profile-update'>Profile Update</NavLink>
            <NavLink to='/project-update'>Project Update</NavLink>
            <NavLink to='/search'>Search</NavLink> */}
            <div className='dropdown'>
              <NavLink className='dropbtn' to='mycard'>Cards</NavLink>
              <div className='dropdown-content'>
                <img className='arrow' src="./Icons/menuArrow.svg" alt="menuArrow"/>
            <NavLink to='/mycard'>Edit My Card</NavLink>
            <NavLink to='/mycard'>View My Stack</NavLink>
            </div>
            </div>
            <div className='dropdown'>
              <NavLink className='dropbtn' to='mycard'>Projects</NavLink>
              <div className='dropdown-content'>
                <img className='arrow' src="./Icons/menuArrow.svg" alt="menuArrow"/>
            <NavLink to='/mycard'>Edit My Card</NavLink>
            <NavLink to='/mycard'>View My Stack</NavLink>
            </div>
            </div>
            <div className='dropdown'>
              <NavLink className='dropbtn' to='mycard'>Find</NavLink>
              <div className='dropdown-content'>
                <img className='arrow' src="./Icons/menuArrow.svg" alt="menuArrow"/>
            <NavLink to='/mycard'>Edit My Card</NavLink>
            <NavLink to='/mycard'>View My Stack</NavLink>
            </div>
            </div>
            <div className='navbar-icons-box'>
            <NavLink to=''><img className='navbar-icons' src="./Icons/notificationBell.svg" alt="bell"/></NavLink>
            <NavLink onClick={this.props.logOut} to='/'>
              <img className='navbar-icons' src="./Icons/logout.svg" alt="log out"/>
            </NavLink>
            </div>
          </Fragment>
        ) : (
          <Fragment>
            {this.props.history.push("/")}
            {/* <NavLink to='/sign-up'>Sign Up</NavLink>
            <NavLink to='/log-in'>Log In</NavLink> */}
          </Fragment>
        )}
      </nav>
    );
  }
}

export default NavBar;

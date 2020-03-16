import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>

        {this.props.email ? ( // this is a terniaty to decide what to display in reference to the user choice
          <Fragment>
            {/* <NavLink to='/profile'>Profile</NavLink> */}
            <NavLink to='/projects'>Projects</NavLink>
            <NavLink to='/profile-update'>Profile Update</NavLink>
            <NavLink to='/project-update'>Project Update</NavLink>
            <NavLink to='/search'>Search</NavLink>

            <NavLink onClick={this.props.logOut} to='/'>
              Log Out
            </NavLink>
          </Fragment>
        ) : (
          <Fragment>
            <NavLink to='/sign-up'>Sign Up</NavLink>
            <NavLink to='/log-in'>Log In</NavLink>
          </Fragment>
        )}
      </nav>
    );
  }
}

export default NavBar;

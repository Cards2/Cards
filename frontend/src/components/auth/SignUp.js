import React, { Component, Fragment } from 'react';
import actions from '../../services/index'

class SignUp extends Component {
    state = {

    } 
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit =  e => {
        e.preventDefault()
            actions.signUp(this.state).then(user=> {
                this.props.setUser({...user.data})  
            }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <Fragment>
                <h2>SignUP</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="username" type="text" onChange={this.handleChange} placeholder='username' />
                    <br></br>
                    <input name="email" type="email" onChange={this.handleChange} placeholder='email'/>
                    <br></br>
                    <input name="password" type="password" onChange={this.handleChange} placeholder='password'/>
                    <br></br>
                    <input type="submit" value="Sign Up"/>
                </form>
            </Fragment>
        );
    }
}

export default SignUp;
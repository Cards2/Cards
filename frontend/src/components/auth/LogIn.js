import React, { Component,} from 'react'; // Fragment 
import actions from '../../services/index'

class LogIn extends Component {

    state = {

    } 
    
    handleChange = e => this.setState({[e.target.name]: e.target.value})

    handleSubmit = e => {
        e.preventDefault()
         actions.logIn(this.state).then(user => {
            this.props.setUser({...user.data})  
        }).catch(({ response }) => console.error(response.data));
    }
    render() {
        return (
            <div className='login-box'>
                <h2>LogIn</h2>
                <form onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} placeholder='email' />
                    <input name="password" type="password" onChange={this.handleChange} placeholder='password' />
                    <input type="submit" value="Log In"/>
                </form>
            </div>
        );
    }
}

export default LogIn;
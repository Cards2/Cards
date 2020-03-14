import React, { Component,} from 'react'; // Fragment 
import actions from '../../services/index'
import Footer from '../partials/Footer';

class LogIn extends Component {

    state = {}

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
                
                <form className='form-box' onSubmit={this.handleSubmit}>
                    <input name="email" type="email" onChange={this.handleChange} placeholder='email' />
                    <input name="password" type="password" onChange={this.handleChange} placeholder='password' />
                    <div className='reg-btn'>
                    <input id='btnlog' className='btn-login' type="submit" value="Log In" onClick={a => (this.redirect)}/>
                    
                    <a id='btnsignup'className='btn-signup' href="/sign-up">Sign up</a>
                    </div>
                </form>
            </div>
                
            
        );
    }
}

export default LogIn;
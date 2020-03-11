import React, { Component } from 'react';
import actions from '../../services/index'
import axios from 'axios'

class Search extends Component {
    state={

    }
    componentDidMount() {
        axios.get('/userdata').then(res=> {
            this.setState({
                user: res.data
            })
        })
        
    }
    render() {
        console.log(this.state)
        console.log('yooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo00000000')
        return (
            <div>
               
            </div>
        );
    }
}

export default Search;
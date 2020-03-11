import React, { Component } from 'react';

class Search extends Component {
    render() {
        if (!this.props.user.email) {
          this.props.history.push("/log-in");
        } return (
            <div>
                <h1>Search</h1>
            </div>
        );
    }
}

export default Search;
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Profile extends Component {

    constructor(){
        super();
    }

    logout(e){
        e.preventDefault();
        sessionStorage.setItem('user', '');
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                profile
                <button onClick={(e) => this.logout(e)}>Log out</button>
            </div>
        );
    }
}
Profile.propTypes = {
    history : PropTypes.any
};

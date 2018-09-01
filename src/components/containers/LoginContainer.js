import React, { Component } from 'react';
import Login from '../Login';

export default class LoginContainer extends Component {

    render(){
        return(
            <Login
                Email = {this.state.Email}
                Password = {this.state.Password}
                errorlist = {this.state.errorlist}
                handleEmail = {this.handleEmail(e)}
                handlePassword = {this.handlePassword(e)}
                submitlogin = {this.SubmitLoginForm(e)}
            />
        );
    }
};

import React, { Component } from 'react';
import Register from '../Register';

export default class RegisterContainer extends Component {

    render() {
        return (
            <Register 
                handleage={this.handleage}
                handleFirstName={this.handleFirstName}
                handleLastName={this.handleLastName}
                handleEmail={this.handleEmail}
                handlePassword={this.handlePassword}
                handleVPassword={this.handleVPassword}
                FirstName={this.state.FirstName}
                LastName={this.state.LastName}
                Born={this.state.Born}
                Email={this.state.Email}
                Password={this.state.Password}
                VPassword={this.state.VPassword}
                errorlist={this.state.errorlist}
            />
        );
    }
}


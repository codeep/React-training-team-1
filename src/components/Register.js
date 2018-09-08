import React, { Component } from 'react';
import ErrorList from './Errorlist';

export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            FirstName : '',
            LastName : '',
            Born : '',
            Email : '',
            Password : '',
            VPassword : '',
            errorlist : ''
        };        
    }

    handleFirstName(e){
        this.setState({
            FirstName : e.target.value
        });
    }
    handleLastName(e){
        this.setState({
            LastName : e.target.value
        });
    }
    handleage(e){
        this.setState({
            Born : e.target.value
        });
    }
    handleEmail(e){
        this.setState({
            Email : e.target.value
        });
    }
    handlePassword(e){
        this.setState({
            Password : e.target.value
        });
    }
    handleVPassword(e){
        this.setState({
            VPassword : e.target.value
        });
    }

    SubmitRegisterForm(e){
        e.preventDefault();
        if(this.state.Password === this.VPassword || this.state.FirstName !== '' || this.state.LastName !== '' || this.state.Email !== '' || this.state.Password !== '' || this.state.VPassword !== ''){
            const checkifregistered = localStorage.getItem(this.state.Email);
            if(checkifregistered === null ){
                const arr = {
                    FirstName : this.state.FirstName,
                    LastName : this.state.LastName,
                    Born : this.state.Born,
                    Email : this.state.Email,
                    Password : this.state.Password
                };
                console.log(this.state);
                const json = JSON.stringify(arr);
                localStorage.setItem(this.state.Email, json);
                this.setState({
                    FirstName : '',
                    LastName : '',
                    Email : '',
                    Password : '',
                    VPassword : ''
                });
            }else{
                this.setState({
                    errorlist: 'Account with that email already exists'
                });
            }            
        }else{
            this.setState({
                errorlist: 'Please write all credentials'
            });
        }
    }

    render() {
        return (
            <div className='container'>                
                <form onSubmit={(e) => this.SubmitRegisterForm(e)}>
                    <input id='registerinput firstname' value={this.state.FirstName} type='text' name='FirstName' placeholder='Enter your firstname' onChange={(e) => this.handleFirstName(e)}/>
                    <input id='registerinput lastname' value={this.state.LastName} type='text' name='LastName' placeholder='Enter your lastname' onChange={(e) => this.handleLastName(e)}/>
                    <input id='registerinput born' value={this.state.Born} type="date" name="Born" onChange={(e) => this.handleage(e)} />
                    <input id='registerinput email' value={this.state.Email} type='eamil' name='Email' placeholder='Example@mail.com' onChange={(e) => this.handleEmail(e)}/>
                    <input id='registerinput pass' value={this.state.Password} type='password' name='Pass' placeholder='Enter password' onChange={(e) => this.handlePassword(e)}/>
                    <input id='registerinput vpass' value={this.state.VPassword} type='password' name='PassV' placeholder='Verify password' onChange={(e) => this.handleVPassword(e)}/>
                    <input type='submit' value='Submit' />
                </form>
                <ErrorList item={this.state.errorlist}/>
            </div>
        );
    }
}
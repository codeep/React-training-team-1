import React, { Component } from 'react';
import ErrorList from './Errorlist';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            Email: '',
            Password : '',
            errorlist: ''
        };
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

    SubmitLoginForm(e){
        e.preventDefault();
        if(this.state.Email !== '' && this.state.Password !== '' ){
            let user = localStorage.getItem(this.state.Email);
            if(user === null){
                this.setState({ errorlist : 'there is no account with this email' });
            }else{
                let userparsed = JSON.parse(user);
                if(this.state.Password === userparsed.Password){
                    sessionStorage.setItem('user', this.state.Email);
                    this.setState({
                        Email : '',
                        Password : ''
                    });
                }else{
                    this.setState({
                        errorlist: 'Please make sure you entered correct password'
                    });
                }
            }
        }else{
            this.setState({
                errorlist: 'Please make sure you have filled the form'
            });
        }
    }

    render() {
        return (
            <div className='login-form-div'>
                <div className='titleforcomponent'>Sign In</div>           
                <form onSubmit={(e) => this.SubmitLoginForm(e)}>
                    <input className='registerInput' value={this.state.Email} type='eamil' name='Email' placeholder='Example@mail.com' onChange={(e) => this.handleEmail(e)}/>
                    <input className='registerInput' value={this.state.Password} type='password' name='Pass' placeholder='Enter password' onChange={(e) => this.handlePassword(e)}/>
                    <input className='registerInput' type='submit' value='Submit' />
                </form>
                <ErrorList err={this.state.errorlist}/>
            </div>
        );
    }
}
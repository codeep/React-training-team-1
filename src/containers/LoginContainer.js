import React, { Component } from 'react';
import ErrorList from '../components/ErrorListComponent';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class LoginContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            Password: '',
            errorlist: ''
        };
        if (localStorage.getItem('user') !== null && localStorage.getItem('user') !== '') {
            this.props.history.push('/profile');
        }
    }

    handleEmail(e) {
        this.setState({
            Email: e.target.value
        });
    }
    handlePassword(e) {
        this.setState({
            Password: e.target.value
        });
    }

    SubmitLoginForm(e) {
        e.preventDefault();
        if (this.state.Email !== '' && this.state.Password !== '') {
            let user = localStorage.getItem(this.state.Email);
            if (user === null) {
                this.setState({ errorlist: 'there is no account with this email' });
            } else {
                let userparsed = JSON.parse(user);
                if (this.state.Password === userparsed.Password) {
                    localStorage.setItem('user', this.state.Email);
                    this.props.history.push('/profile');
                    this.setState({
                        Email: '',
                        Password: ''
                    });
                } else {
                    this.setState({
                        errorlist: 'Please make sure you entered correct password'
                    });
                }
            }
        } else {
            this.setState({
                errorlist: 'Please make sure you have filled the form'
            });
        }
    }


    render() {
        return (
            <div className='divforfadein logindiv'>
                <div className='login-form-div'>
                    <div className='container'>
                        <div className='backgroundfordiv'>
                            <span>Sign In</span>
                            <Form onSubmit={(e) => this.SubmitLoginForm(e)}>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' type="email" name="email" id="Email" value={this.state.Email} placeholder="example@email.com" bsSize="lg" onChange={(e) => this.handleEmail(e)} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' type="password" name="email" id="Password" value={this.state.Password} placeholder="Password" onChange={(e) => this.handlePassword(e)} />
                                    </Col>
                                </FormGroup>
                                <Input className='loginSubmit' type='submit' value='Sign In' />
                            </Form>
                            <Link className='sentologinregister' to='/register'>Don&#96;t have an account?</Link>
                            <ErrorList item={this.state.errorlist} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
LoginContainer.propTypes = {
    history: PropTypes.any
};

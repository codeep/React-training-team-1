import React, { Component } from 'react';
import { Col, Form, FormGroup, Input } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class RegisterContainer extends Component {

    constructor() {
        super();
        this.state = {
            FirstName: '',
            LastName: '',
            Born: '',
            Email: '',
            Password: '',
            VPassword: '',
            error: ''
        };
    }

    validateform() {
        if (this.state.FirstName === '' && this.state.LastName === '' && this.state.Born === '' && this.state.Email === '' && this.state.Password === '' && this.state.VPassword === '') {
            this.setState({
                error: '* Please fill out the form'
            });
            return false;
        }
        let re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        if (!re.test(this.state.Password)) {
            this.setState({
                error: '* Your password needs to be at least 6 caracters or have both number and caracters'
            });
            return false;
        }
        if (this.state.Password !== this.state.VPassword) {
            this.setState({
                error: '* Please enter same password for validation'
            });
            return false;
        }
        const checkifregistered = localStorage.getItem(this.state.Email);
        if (checkifregistered !== null) {
            this.setState({
                error: '* Account with this email exist'
            });
            return false;
        }
        return true;
    }

    handleFirstName(e) {
        this.setState({
            FirstName: e.target.value
        });
    }
    handleLastName(e) {
        this.setState({
            LastName: e.target.value
        });
    }
    handleage(e) {
        this.setState({
            Born: e.target.value
        });
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
    handleVPassword(e) {
        this.setState({
            VPassword: e.target.value
        });
    }

    SubmitRegisterForm(e) {
        e.preventDefault();
        const validate = this.validateform();
        if (validate === true) {
            const arr = {
                FirstName: this.state.FirstName,
                LastName: this.state.LastName,
                Born: this.state.Born,
                Email: this.state.Email,
                Password: this.state.Password
            };
            const json = JSON.stringify(arr);
            localStorage.setItem(this.state.Email, json);
            this.props.history.push('/');
            this.setState({
                FirstName: '',
                LastName: '',
                Email: '',
                Password: '',
                VPassword: ''
            });
        }
    }

    render() {
        return (
            <div className='registerdiv'>
                <div className='register-form-div'>
                    <div className='container'>
                        <div className='backgroundfordiv'>
                            <span>Sign Up</span>
                            <Form onSubmit={(e) => this.SubmitRegisterForm(e)}>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' id='Firstname' value={this.state.FirstName} type='text' name='FirstName' placeholder='Enter your firstname' bsSize="lg" onChange={(e) => this.handleFirstName(e)} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' id='Lastname' value={this.state.LastName} type='text' name='LastName' placeholder='Enter your lastname' onChange={(e) => this.handleLastName(e)} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' id='born' value={this.state.Born} type="date" name="Born" onChange={(e) => this.handleage(e)} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' id='Email' value={this.state.Email} type='eamil' name='Email' placeholder='Example@mail.com' onChange={(e) => this.handleEmail(e)} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' id='Password' value={this.state.Password} type='password' name='Pass' placeholder='Enter password' onChange={(e) => this.handlePassword(e)} />
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col sm={10}>
                                        <Input className='loginInput' id='VPassword' value={this.state.VPassword} type='password' name='VPass' placeholder='Enter password' onChange={(e) => this.handleVPassword(e)} />
                                    </Col>
                                </FormGroup>
                                <Input className='loginSubmit' type='submit' value='Submit' />
                            </Form>
                            <Link className='sentologinregister' to='/'>Already have an account?</Link>
                            <span className='errorspan'>{this.state.error}</span>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
RegisterContainer.propTypes = {
    history: PropTypes.any
};
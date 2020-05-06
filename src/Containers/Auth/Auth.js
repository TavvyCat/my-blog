import React, { Component } from 'react';
import Classes from './Auth.css';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

class Auth extends Component {
    state = { 
        auth: {
            email: '',
            password: ''
        },
        isEmailValid: false
    }

    submissionHandler = event => {
        event.preventDefault();
        this.props.onsubmissionHandler(this.state.auth.email, this.state.auth.password);
    }

    checkEmail = value => {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        const isValid = pattern.test(value)
        this.setState({ isEmailValid: isValid});
    }

    inputChangeHandler = event => {
        if (event.target.name === 'email') {
            this.checkEmail(event.target.value)
        }
        const updatedState = {
            ...this.state.auth,
            [event.target.name]: event.target.value
        }
        this.setState({ auth: updatedState });
    }

    render() {
        const isValid = !this.state.isEmailValid ? Classes.Invalid : null;
        
        const authRedirect = this.props.isAuthenticated ? <Redirect to="/admin" /> : null;

        return (
            <div className={Classes.Auth}>
                {authRedirect}
                <div className={Classes.Modal}>
                    <form onSubmit={this.submissionHandler}>
                        <label>Email
                            <input 
                                className={isValid}
                                name='email'
                                type='text' 
                                value={this.state.auth.email}
                                onChange={(event) => this.inputChangeHandler(event)} />
                        </label>
                        <label>Password
                            <input 
                                name='password'
                                type='password' 
                                value={this.state.auth.password} 
                                onChange={(event) => this.inputChangeHandler(event)}/>
                        </label>
                        <button type='Success'>Sign-In</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.token !== null
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onsubmissionHandler: (email, password) => dispatch(actions.login(email, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
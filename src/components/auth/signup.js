import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';


class Signup extends Component {

    handleSubmit () {

    }

    renderError (err) {
        return (
            <alert className="alert alert-danger" ></alert>
        )
    } 

    render () {
        const { handleSubmit } = this.props;
        return (
            <form className="form-group" onSubmit={handleSubmit(this.handleSubmit.bind(this))}>
                <fieldset>
                    <label>Email</label>
                    <Field 
                        name="email"
                        type="email"
                        component='input'
                        placeholder="Email"
                        className="form-control"
                    />
                    <label>Password</label>
                    <Field
                        name="password"
                        type="password"
                        placeholder="Password"
                        component='input'
                        className="form-control"
                    />
                    <label>Confirm Password</label>
                    <Field
                        name="passwordConfirm"
                        type="password"
                        placeholder="Confirm Password"
                        component='input'
                        className="form-control"
                    />
                    <button className='btn btn-primary' type="submit">Sign Up</button>
                </fieldset>
            </form>
        )
    }
}

function validate(formProps) {
    const errors = {};
    console.log(formProps)

    if (formProps.password !== formProps.passwordConfirm) {
        errors.password = 'Passwords must match';
    }
    return errors;
}

export default reduxForm({
    form: 'signup',
    validate
})(Signup);
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Field, reduxForm } from "redux-form";
import * as actions from '../../actions';

class Signin extends Component {

    handleFormSubmit({email, password}) {
        console.log(email, password);
        console.log(actions);
        console.log(this.props);
        this.props.signinUser({email, password});
    }

    renderAlert() {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Oops! </strong> {this.props.errorMessage}
                </div>
            )
        }
    }

    renderSuccess() {
        console.log(this.props.authenticated)
        if(this.props.authenticated) {
            return (
                <div className="alert alert-success">
                    <strong>Logged In!</strong>
                </div>
            )
        }
    }

    render() {
        const { handleSubmit, fields: {email, password}, signinUser} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                    <fieldset className="form-group">
                        <label>Email:</label>
                        <Field
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Email"
                            className="form-control"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Password:</label>
                        <Field
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Password"
                            className="form-control" />
                    </fieldset>
                    <button action="submit" className="btn btn-primary">Sign In</button>
                    {this.renderSuccess()}
                </form>
               
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators(actions, dispatch)
}

const mapStateToProps = state => {
    return {
        authenticated: state.auth.authenticated
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'signin',
    fields: ['email', 'password']
})(Signin));

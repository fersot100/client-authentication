import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER } from './types';

const ROOT_URL = require('../config');

export function signinUser({ email, password }) {
    return function(dispatch) {
        // Submit email/password to the server
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(res => {
                // If request is good..
                // - Update state to indicate user is authenticated
                dispatch({type: AUTH_USER});
                // - Save the JWT token
                localStorage.setItem('token', response.data.token);
                // - redirect to the route '/feature'

                browserHistory.push('/feature');
            })
            .catch(() => {
                // If request is bad...
                // - Show an error to the user 
            });

        console.log('Called Signin user');
    }
}

export function signoutUser() {
    localStorage.removeItem('token');
    return {
        type: UNAUTH_USER
    }
}

export function authError(err) {
    return {
        type: AUTH_ERROR,
        payload: err
    }
}
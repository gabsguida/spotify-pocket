import React from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

import Authorize from '../containers/Authorize/Authorize';

import {actionGetAuthInfo} from '../actions/authActions';


const AuthorizeRoute = () => {
    const dispatch = useDispatch();
    
    // returns the params
    const getParams = (str) => {
        const output = {};
        if(str){
            const params = str.substring(1).split("&");
            params.forEach(param => {
                const result = param.split("=");
                output[result[0]] = decodeURIComponent(result[1]);
            });
        }
        return output;
    }

    //returns the hash params
    const getHashParams = () => getParams(window.location.hash);

    //returns the query string params
    const getQueryParams = () => getParams(window.location.search);

    if(getQueryParams().error){
        return <Redirect to="/" />
    }
    
    // dispatch the params (access_token, token_type and expires_in to the state)
    dispatch(actionGetAuthInfo(getHashParams()));
    
    return (
        <React.Fragment>
            <Authorize />
            <Redirect to="/dashboard" />
        </React.Fragment>
        
    );
}

export default AuthorizeRoute;
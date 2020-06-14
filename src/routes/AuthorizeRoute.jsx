import React from 'react';
import {useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';

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

    // dispatch the params (access_token, token_type and expires_in to the state)
    const getHashParams = () => getParams(window.location.hash);

    //returns the query when the access is denied
    const getQueryParams = () => getParams(window.location.search);

    if(getQueryParams().error){
        return <Redirect to="/" />
    }
    
    dispatch(actionGetAuthInfo(getHashParams()));
    
    return (
        <Redirect to="/dashboard" />
    );
}

export default AuthorizeRoute;

/* access_token: "BQCBXKBZ5MOzd1gObjWU3gRJ8MZLWDqEBjPUSIVFG7W1naxFRKC4GfRlcexDNuX2K671pneJv9L5rmg8DfRfctUP2slTmOOlMiRri5HucIpJzVf_Vog4qRJE9ykiSD--HhjBcekA4kR5OOSjC7U5NGV3nLsO4qnRJpOLMECQ0NbFJbseeg_MN5U"
expires_in: "3600"
token_type: "Bearer" */
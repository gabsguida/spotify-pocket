import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Login from '../containers/Login/Login';
import AuthorizeRoute from './AuthorizeRoute';
import DashboardRoute from './DashboardRoute';
import PrivateRoute from '../containers/PrivateRoute/PrivateRoute';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/authorize" component={AuthorizeRoute} />
            <PrivateRoute path="/dashboard" component={DashboardRoute} />
        </Switch>
    )
}

export default Routes;
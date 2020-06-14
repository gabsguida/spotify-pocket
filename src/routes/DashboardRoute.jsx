import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Switch, useRouteMatch} from 'react-router-dom'; 

import Topbar from '../containers/Topbar/Topbar';
import Dashboard from '../containers/Dashboard/Dashboard';
import Categories from '../containers/Categories/Categories';
import PrivateRoute from '../containers/PrivateRoute/PrivateRoute';
import WelcomeBox from '../components/WelcomeBox/WelcomeBox';
import PlaylistsRoute from '.';

import fetchUserProfile from '../modules/userRequest';
import fetchCategories from '../modules/categoriesRequest';

const DashboardRoute = () => {
    const userInfo = useSelector(state => state.userReducer);
    const authInfo = useSelector(state => state.authReducer);
    const {categories, loading} = useSelector(state => state.categoriesReducer);
    
    const {url, path} = useRouteMatch();

    useEffect(() => {
        console.log('effectuser')
        fetchUserProfile(authInfo);
    }, [authInfo])

    useEffect(() => {
        console.log('effectcategories')
        fetchCategories(authInfo)
    }, [authInfo])


    return(
        <Dashboard>
            <Topbar userName={userInfo.userName} userThumb={userInfo.thumb} />
            <Switch>
                <PrivateRoute exact path={path}>
                    <WelcomeBox name={userInfo.userName} />
                    <Categories categories={categories} isLoading={loading} url={url} />
                </PrivateRoute>
                
                <PrivateRoute exact path={`${path}/:categoryId`}>
                    <PlaylistsRoute path={path} />
                </PrivateRoute>

                    
            </Switch>

        </Dashboard>
    )
}

export default DashboardRoute;
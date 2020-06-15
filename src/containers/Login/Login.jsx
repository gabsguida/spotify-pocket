import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Ink from 'react-ink';
import { debounce } from 'lodash';
import endpoints from '../../modules/endpoints';
import {actionGetCachedAuthInfo} from '../../actions/authActions';
import {Redirect} from 'react-router-dom';

import Logo from '../../components/Logo/Logo';

import backgroundImgMobile from "../../assets/images/app-intro-1.jpg";
import backgroundImgDesktop from "../../assets/images/app-intro-2.jpg";

import './Login.scss';

const Login = () => {
    const [isMobile, setIsMobile] = useState(false);

    const resizeScreen = () => {
        return window.innerWidth <= 728 ? setIsMobile(true) : setIsMobile(false);
    }

    useEffect(() => {
        window.addEventListener("resize", debounce(resizeScreen, 250));
        return () => {
            window.removeEventListener("resize", debounce(resizeScreen))
        }
    }, []);

    //const dispatch = useDispatch();
    /* const cachedAuth = JSON.parse(localStorage.getItem('spotifyAuth'));

    const currentTime = (new Date().getTime() / 1000);
    if (cachedAuth && cachedAuth.validUntil > currentTime) {
        dispatch(actionGetCachedAuthInfo(cachedAuth));
      return (
          <Redirect to="/dashboard" />
      );
    } */

    const authUrl = endpoints.getAuthorization.url;

    return (
        <main
            className="login"
            data-testid="login"
            style={{backgroundImage: `url(${isMobile ? backgroundImgMobile : backgroundImgDesktop})`}}
        >
            <div className="container">
                <Logo />
                <h2 className="login__microcopy">
                    Não toca a música inteira,
                    <strong> mas toca o seu <span role="img" className="login__microcopy__heart" aria-label="Coração">&#10084;&#65039;</span></strong>
                </h2>
                <a href={authUrl} className="login__auth-button">
                    Entrar no Spotify
                    <Ink />
                </a>
            </div>
        </main>
    );
}


export default Login ;

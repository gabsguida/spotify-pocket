import React from 'react';
import {Link} from 'react-router-dom';

import Logo from '../../components/Logo/Logo';

import './Topbar.scss';

const Topbar = ({userName, userThumb}) => {
    return (
        <header className="topbar" data-testid="topbar">
            <div className="container">
                <Link to="/dashboard">
                    <Logo />
                </Link>
                <div className="user">
                    <span className="user__name">{userName}</span>
                    <figure className="user__thumb">
                        <img src={userThumb} alt={`foto de perfil de ${userName}`} />
                    </figure>
                </div>
            </div>
        </header> 
    )
}

export default Topbar;

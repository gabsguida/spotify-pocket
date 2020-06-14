import React from 'react';
import backgroundImgAuth from '../../assets/images/app-intro-1.jpg';
import Loading from '../../components/Loading/Loading';
import './Authorize.scss';

const Authorize = () => {
  return (
      <div className="callback" data-testid="callback" style={{backgroundImage: `url(${backgroundImgAuth})`}}>
        <div className="container">
          <Loading text="Autenticando..." />
        </div>
      </div>
    );
}

export default Authorize;


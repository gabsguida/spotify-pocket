import React from 'react';
import Player from '../Player/Player';
import './Dashboard.scss';

const Dashboard = ({ children }) => (
    <div className="dashboard" data-testid="dashboard">
        {children}
        <Player />
    </div>
    
    );

export default Dashboard;


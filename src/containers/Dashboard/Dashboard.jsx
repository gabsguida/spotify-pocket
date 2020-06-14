import React from 'react';

import './Dashboard.scss';

const Dashboard = ({ children }) => (
    <div className="dashboard" data-testid="dashboard">
        {children}
    </div>
    );

export default Dashboard;



import React from 'react';

import './Header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-title-section">
                <h1>Employee Dashboard</h1>
                <p className="header-subtitle">
                    Manage your team performance and details
                </p>
            </div>
            <div className="header-actions">
                <div className="user-profile">
                    <div className="user-avatar">
                        JD
                    </div>
                </div>
            </div>
        </header>
    );

};

export default Header;

import React from 'react';
import Icon from '../../favicon.png';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={Icon} alt="icon" />
            <h1>The World</h1>
        </div>
    );
};

export default Header;
import React from 'react';
import './NotFound.css';
import broken from '../404.png';

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Page Not Found</h1>
            <img src={broken} alt="404" />
        </div>
    );
};

export default NotFound;
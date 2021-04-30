import React from 'react';
import './NotFound.scss';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='not-found'>
            <img src="../assets/notFound.png" alt="not-found"/>
            <Link to="/">
                <button className="not-found_button">Go to home page</button>
            </Link>
        </div>
    )
}

export default NotFound;
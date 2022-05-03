import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/HeaderBar.css'

const HeaderBar = () => {
    return (
        <Link to="/" className="HeaderBar">
            <div className="HeaderLogo" />
        </Link>
    );
};
export default HeaderBar;
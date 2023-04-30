import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import resume from '../Assets/Files/MyResume.pdf'
import '../Styles/HeaderBar.css'
import InitializeGoogleAnalytics, { TrackGoogleAnalyticsEvent } from '../GoogleAnalytics/googleanalytics4';

const HeaderBar = React.forwardRef((props, ref) => {
    let location = useLocation();
    useEffect(()=>{
        InitializeGoogleAnalytics(); //initializing GA4
      })

    return (
        <div className="HeaderBar">
            <Link to="/" state={{from: location.pathname}} className="HeaderLogo" />
            <div className='header-options'>
                <Link to="/" state={{from: location.pathname, to: 'home'}}><p className='header-item'>Home</p></Link>
                <Link to="/" state={{from: location.pathname, to: 'work'}}><p className='header-item'>Work</p></Link>
                <Link to="/About" state={{from: location.pathname}}><p className='header-item'>About Me</p></Link>
                <p style={{cursor: "pointer"}} onClick={() => { TrackGoogleAnalyticsEvent( "User Activity", "Resume", window.location.pathname ); window.open(resume); }} className='header-item'>Résumé</p>
            </div>
        </div>
    );
});
export default HeaderBar;
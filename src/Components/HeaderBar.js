import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import resume from '../Assets/Files/MyResume.pdf'
import '../Styles/HeaderBar.css'
import InitializeGoogleAnalytics, { TrackGoogleAnalyticsEvent } from '../GoogleAnalytics/googleanalytics4';

const HeaderBar = React.forwardRef((props, ref) => {
    const [menuVisible, setMenuVisible] = useState(false);
    let location = useLocation();
    useEffect(() => {
        InitializeGoogleAnalytics(); //initializing GA4
        window.addEventListener("scroll", toggleVisible, false); //Listening for scroll event
        return () => {
            window.removeEventListener("scroll", toggleVisible, false);
        }
    })

    // Show Menu After Scrolling Down More than 100vh
    const toggleVisible = () => {
        if (location.pathname !== '/') {
            setMenuVisible(true);
        }
        else {
            if (
                document.body.scrollTop > vh(100) ||
                document.documentElement.scrollTop > vh(100)
            ) {
                setMenuVisible(true);
            } else {
                setMenuVisible(false);
            }
        }
    };

    function vh(percent) {
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        return (percent * h) / 100;
    }

    return (
        <div className="HeaderBar">
            <Link to="/" state={{ from: location.pathname }} className="HeaderLogo" />
            <div className='header-options'>
                <Link to="/" state={{ from: location.pathname, to: 'home' }}><p className={menuVisible ? 'header-item' : 'header-item-hide'}>Home</p></Link>
                <Link to="/" state={{ from: location.pathname, to: 'work' }}><p className={menuVisible ? 'header-item' : 'header-item-hide'}>Work</p></Link>
                <Link to="/About" state={{ from: location.pathname }}><p className={menuVisible ? 'header-item' : 'header-item-hide'}>About</p></Link>
                <p style={{ cursor: "pointer" }} onClick={() => { TrackGoogleAnalyticsEvent("User Activity", "Resume", window.location.pathname); window.open(resume); }} className={menuVisible ? 'header-item' : 'header-item-hide'}>Résumé</p>
            </div>
        </div>
    );
});
export default HeaderBar;
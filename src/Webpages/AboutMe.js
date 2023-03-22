import React from 'react';
import './Styles/AboutMe.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer.js';
import { onLinkClick } from '../Components/Footer.js';
import { useEffect } from "react";

import DP from '../Assets/Images/DP.jpg';

// TO DO - Decrease padding for mobile view

const AboutMe = React.forwardRef((props, ref) => {

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div className='AB-page-container'>
            <HeaderBar />
            <div className='AB-page-content'>
                <div>

                </div>
                <div className='AB-page-parent-container'>
                    <div className='AB-dp-container'>
                        <img alt='its me' className='AB-dp' src={DP}></img>
                    </div>
                    <div className='AB-page-body-container'>
                        <p className='AB-page-body'><b style={{color: "#FFFFFF"}}>Hello! I'm Sahith Reddy.</b> I am a UI developer turned designer, a decision that resulted from learning the importance of usability and user perception in interfaces. I firmly believe products are supposed to be tools to help us become a better version of ourselves, not distract us away from it.</p>
                        <p className='AB-page-body'>Currently, I am pursuing a graduate degree in <b style={{color: "#FFFFFF"}}>Human-Centered Computing</b> from the <a href="https://hcc.umbc.edu/">University of Maryland, Baltimore County (UMBC)</a>. Through my coursework and research projects at UMBC, I have gained a deep understanding of user-centered design principles and honed my skills in creating intuitive, user-friendly & effective tools.</p>
                        <p className='AB-page-body'>I've previously worked on creating user interfaces professionally for web and mobile platforms and have recently worked on designing UX screens for a mobile e-commerce application.</p>
                        <p className='AB-page-body'>I'm looking for opportunities to use my learned skills and am excited about directly affecting people's lives through intelligently designed systems.</p>
                        <div className='social' id="social">
                            <div onClick={() => onLinkClick("behance")}>BEHANCE</div>
                            <div>/</div>
                            <div onClick={() => onLinkClick("linkedin")}>LINKEDIN</div>
                            <div>/</div>
                            <div onClick={() => onLinkClick("medium")}>MEDIUM</div>
                            <div>/</div>
                            <div onClick={() => onLinkClick("github")}>GITHUB</div>
                        </div>
                        <div className='AB-info'>
                            <p className='info'>Catonsville, MD</p>
                            <p className='info' onClick={() => onLinkClick("email")}>sahithreddy.a@gmail.com</p>
                            <p className='info' onClick={() => onLinkClick("phone")}>+1 (443) 631-8332</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
});
export default AboutMe;
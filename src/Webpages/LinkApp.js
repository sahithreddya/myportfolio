import React from 'react';
import './Styles/LinkApp.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";

const LinkApp =  React.forwardRef((props, ref) => {

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
      }, [useLocation()]);

    return (
        <div className='page-container'>
            <HeaderBar/>
            <div className='page-content'>
                <div>
                    <p className='page-title'>LinkApp</p>
                    <p className='page-subtitle'>Mobile Interface Design</p>
                    {/* <div className='colorBarHorizontal'/>
                    <div className='colorBarHorizontal'/> */}
                </div>
                <div className='page-body-container'>
                    <p className='page-body' style={{fontStyle: "italic", marginTop: 0, marginBottom: "2em"}}>P.S: Because of my NDA, I will be sharing limited information regarding this project. The screens I’ve included below are done so with permission. If you need more context, please contact me at <b>sahithreddy.a@gmail.com</b>.</p>
                    <div className='page-body-about-container'>
                        <p className='page-body-about'>About this project</p>
                        <div className='page-body-about-line'/>
                    </div>
                    <p className='page-body'>An ongoing retail business app project I’ve been working on. My work included designing wireframes and interfaces for the mobile app, along with conducting research on competitors and the targeted customer base. The customer base includes users who aren't entirely literate when it comes to digital tools, and therefore the design language is kept very simple and makes use of universal signifiers.</p>
                    <div className='page-body-about-container'>
                        <p className='page-body-about'>What I've learned</p>
                        <div className='page-body-about-line'/>
                    </div>
                    <ul className='page-body'>
                        <li>Creating a proper design system in <b>Adobe XD</b> which helps in maintaining consistency across product.</li>
                        <li><b>How to create an app introduction</b> which inspires and informs new users of the product, leading to a quality onboarding experience.</li>
                        <li><b>Making the app more accessible</b> taking varied users into account with little to no experience using digital products using simple design and easily recognizable signifiers.</li>
                    </ul>
                    <div className='photo-grid'/>
                </div>
            </div>
            <Footer/>
        </div>
    );
});
export default LinkApp;
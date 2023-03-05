import React from 'react';
import './Styles/HydTT.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
import { useEffect } from "react";

import img from '../Assets/Images/HydTT/HydTT.jpg';

// TO DO - Decrease padding for mobile view

const HydTT =  React.forwardRef((props, ref) => {

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
      });

    return (
        <div className='HTT-page-container'>
            <HeaderBar/>
            <div className='HTT-page-content'>
                <div>
                    <p className='HTT-page-title'>Tourism Website Redesign</p>
                    <p className='HTT-page-subtitle'>UI/UX Design</p>
                    {/* <div className='colorBarHorizontal'/>
                    <div className='colorBarHorizontal'/> */}
                </div>
                <div className='HTT-page-body-container'>
                    {/* <p className='HTT-page-body' style={{fontStyle: "italic", marginTop: 0, marginBottom: "2em"}}>P.S: Because of my NDA, I will be sharing limited information regarding this project. The screens I’ve included below are done so with permission. If you need more context, please contact me at <b>sahithreddy.a@gmail.com</b>.</p> */}
                    <div className='HTT-page-body-about-container'>
                        <p className='HTT-page-body-about'>About this project</p>
                        <div className='HTT-page-body-about-line'/>
                    </div>
                    <p className='HTT-page-body'><a href='https://www.hyderabadtourism.travel/'>hyderabadtourism.travel</a> is a tourism website for the city Hyderabad, located in India. The website is maintained by HOLIDAYS DNA, a travel package and hotel booking agency. The website is an indirect advertising platform for their services pertaining to Hyderabad.</p>
                    <div className='HTT-page-body-about-container'>
                        <p className='HTT-page-body-about'>What I've learned</p>
                        <div className='HTT-page-body-about-line'/>
                    </div>
                    <ul className='HTT-page-body'>
                        <li>How to <b>communicate intent</b> through color, typeface, and logo branding</li>
                        <li><b>Maintaining a design system in Figma</b> incorporated with the brand identity to keep consistency in designs</li>
                        <li><b>Importance of SWOT analysis</b> to identify weaknesses and opportunities over competitors</li>
                        <li>How to <b>create effective User Personas</b> to introduce customer needs into the design process</li>
                        <li><b>Importance of prototyping</b> and building Low-Fidelity wireframes to gather initial feedback while keeping investment to a minimum</li>
                    </ul>
                    <div className='HTT-img-container'>
                        <img alt='homepage screenshot' style={{width: '100%'}} src={img}></img>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
});
export default HydTT;
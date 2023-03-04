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
                    <p className='HTT-page-body'>HydTT is a browser extension that helps users find environmental and vegan-friendly alternatives to their product searches. The problem they’re trying to address is the challenge that currently comes with finding such sustainable alternative products online. I stumbled upon this product on the internet and it was a genre of product that I didn’t use before. I used this opportunity to study the product and note down my insights.</p>
                    <div className='HTT-page-body-about-container'>
                        <p className='HTT-page-body-about'>What I've learned</p>
                        <div className='HTT-page-body-about-line'/>
                    </div>
                    <ul className='HTT-page-body'>
                        <li>The prioritization of features important to the <b>vision and user experience v/s feasiliblity of the product</b></li>
                        <li>How to <b>communicate design findings</b> and information to clients</li>
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
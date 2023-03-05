import React from 'react';
import './Styles/Beagle.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
import { useEffect } from "react";

import beagleimg from '../Assets/Images/Beagle/Beagle.png';

import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// TO DO - Decrease padding for mobile view

const Beagle = React.forwardRef((props, ref) => {

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    Fancybox.bind("[data-fancybox]", {
        compact: () => window.matchMedia("(max-width: 100px)"),
        Images: {
            initialSize: "cover",
        },
        // Your custom options
    });

    return (
        <div className='BG-page-container'>
            <HeaderBar />
            <div className='BG-page-content'>
                <div>
                    <p className='BG-page-title'>Beagle</p>
                    <p className='BG-page-subtitle'>Product Study</p>
                    {/* <div className='colorBarHorizontal'/>
                    <div className='colorBarHorizontal'/> */}
                </div>
                <div className='BG-page-body-container'>
                    {/* <p className='BG-page-body' style={{fontStyle: "italic", marginTop: 0, marginBottom: "2em"}}>P.S: Because of my NDA, I will be sharing limited information regarding this project. The screens I’ve included below are done so with permission. If you need more context, please contact me at <b>sahithreddy.a@gmail.com</b>.</p> */}
                    <div className='BG-page-body-about-container'>
                        <p className='BG-page-body-about'>About this project</p>
                        <div className='BG-page-body-about-line' />
                    </div>
                    <p className='BG-page-body'>Beagle is a browser extension that helps users find environmental and vegan-friendly alternatives to their product searches. The problem they’re trying to address is the challenge that currently comes with finding such sustainable alternative products online. I stumbled upon this product on the internet and it was a genre of product that I didn’t use before. I used this opportunity to study the product and note down my insights.</p>
                    <div className='BG-page-body-about-container'>
                        <p className='BG-page-body-about'>What I've learned</p>
                        <div className='BG-page-body-about-line' />
                    </div>
                    <ul className='BG-page-body'>
                        <li>The prioritization of features important to the <b>vision and user experience v/s feasiliblity of the product</b></li>
                        <li>How to <b>communicate design findings</b> and information to clients</li>
                    </ul>
                    <div className='BG-img-container'>
                        <a href={beagleimg} data-fancybox data-caption="Beagle Study">
                            <img alt="Beagle case study" style={{ width: '100%' }} src={beagleimg}></img>
                        </a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
});
export default Beagle;
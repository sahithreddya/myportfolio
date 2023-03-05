import React from 'react';
import './Styles/HydLogo.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
import { useEffect } from "react";

import logo from '../Assets/Images/HydTT/logo.png';
import logosquare from '../Assets/Images/HydTT/logo-square.png';
import palette from '../Assets/Images/HydTT/Palette.png';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// TO DO - Decrease padding for mobile view

const HydLogo = React.forwardRef((props, ref) => {

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    Fancybox.bind("[data-fancybox]", {
        compact: () => window.matchMedia("(max-width: 100px)"),
        Images: {
            initialSize: "fit",
          },
        // Your custom options
    });

    return (
        <div className='HTT-logo-page-container'>
            <HeaderBar />
            <div className='HTT-logo-page-content'>
                <div>
                    <p className='HTT-logo-page-title'>Tourism Brand Logo</p>
                    <p className='HTT-logo-page-subtitle'>Logo Design</p>
                    {/* <div className='colorBarHorizontal'/>
                    <div className='colorBarHorizontal'/> */}
                </div>
                <div className='HTT-logo-page-body-container'>
                    {/* <p className='HTT-logo-page-body' style={{fontStyle: "italic", marginTop: 0, marginBottom: "2em"}}>P.S: Because of my NDA, I will be sharing limited information regarding this project. The screens I’ve included below are done so with permission. If you need more context, please contact me at <b>sahithreddy.a@gmail.com</b>.</p> */}
                    <div className='HTT-logo-img-container'>
                        <a className='HTT-flex-item' href={logo} data-fancybox data-caption="Main Logo">
                            <img alt="Hyderabad Tourism Logo" style={{ width: '100%' }} src={logo}></img>
                        </a>
                        <a className='HTT-flex-item' href={logosquare} data-fancybox data-caption="Website Placement">
                            <img alt="Hyderabad Tourism Logo" style={{ width: '100%' }} src={logosquare}></img>
                        </a>
                        <a className='HTT-flex-item' href={palette} data-fancybox data-caption="Color Palette">
                        <img alt="Hyderabad Tourism Logo" style={{ width: '100%' }} src={palette}></img>
                        </a>
                    </div>
                    <div className='HTT-logo-page-body-about-container'>
                        <p className='HTT-logo-page-body-about'>About this project</p>
                        <div className='HTT-logo-page-body-about-line' />
                    </div>
                    <p className='HTT-logo-page-body'>I designed a logo for a local tourism brand that runs in the city of <a href='https://en.wikipedia.org/wiki/Hyderabad'>Hyderabad, India</a>. Hyderabad is a city of juxtaposition with the old and the new existing together. The brand being a travel agency, I also wanted to convey a feeling of luxury & sophistication. I  kept the black fill on the monument as it resembled a silhouette. I wanted the primary color that I’ll use as part of the redesign of the website to evoke a sense of heritage & history. I ended up with a dark reddish brown which fit well with what I had in mind. The secondary color I chose was a bright yellow which conveyed a sense of sophistication and royalty. Using these two colors, I landed on a bright blue using the triadic color harmony. I felt this blue was perfect to show the contrasting modern part of the city and also helped to add a contemporary aesthetic to the brand when included in the logo. I wanted the primary color to be part of the website and therefore didn’t include it in the logo.<br /><br />
                        After gathering peer feedback, most people liked the logo with the monument of Charminar as it is one of the well-known place of interest in India. I also received feedback suggesting there was an element of ‘tourism’ missing from the monument logo, therefore, I added an autorickshaw to the logo to signify tourism. The typeface used in the logo is meant to look modern and classic at the same time, and the typeface Aboreto was a perfect fit for the job.</p>

                </div>
            </div>
            <Footer />
        </div>
    );
});
export default HydLogo;
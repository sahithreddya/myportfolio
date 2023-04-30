import React from 'react';
import './Styles/EnggWeekLogo.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
import { useEffect } from "react";
import InitializeGoogleAnalytics, { TrackGoogleAnalyticsEvent } from '../GoogleAnalytics/googleanalytics4';

import logofront from '../Assets/Images/Engg-Week/Front.png';
import logoback from '../Assets/Images/Engg-Week/Back.png';
import logofront2 from '../Assets/Images/Engg-Week/Front-1.png';
import logoback2 from '../Assets/Images/Engg-Week/Back-1.png';
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// TO DO - Decrease padding for mobile view

const EnggWeekLogo = React.forwardRef((props, ref) => {

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Sahith Reddy | Engineering Week Logo"
        InitializeGoogleAnalytics(); //initializing GA4
        TrackGoogleAnalyticsEvent( "User Activity", "EnggWeekLogo", window.location.pathname );
    });

    Fancybox.bind("[data-fancybox]", {
        compact: () => window.matchMedia("(max-width: 100px)"),
        Images: {
            initialSize: "fit",
          },
        // Your custom options
    });

    return (
        <div className='EnggWeekLogo-page-container'>
            <HeaderBar />
            <div className='EnggWeekLogo-page-content'>
                <div>
                    <p className='EnggWeekLogo-page-title'>Engineering Week Logo</p>
                    <p className='EnggWeekLogo-page-subtitle'>Logo Design</p>
                    {/* <div className='colorBarHorizontal'/>
                    <div className='colorBarHorizontal'/> */}
                </div>
                <div className='EnggWeekLogo-page-body-container'>
                    {/* <p className='EnggWeekLogo-page-body' style={{fontStyle: "italic", marginTop: 0, marginBottom: "2em"}}>P.S: Because of my NDA, I will be sharing limited information regarding this project. The screens I’ve included below are done so with permission. If you need more context, please contact me at <b>sahithreddy.a@gmail.com</b>.</p> */}
                    <div className='EnggWeekLogo-img-container'>
                        <a className='HTT-flex-item' href={logofront} data-fancybox data-caption="Front Graphic">
                            <img alt="Front Graphic" style={{ width: '100%' }} src={logofront}></img>
                        </a>
                        <a className='HTT-flex-item' href={logoback} data-fancybox data-caption="Back Graphic">
                            <img alt="Back Graphic" style={{ width: '100%' }} src={logoback}></img>
                        </a>
                        <a className='HTT-flex-item' href={logofront2} data-fancybox data-caption="Alternative Front Graphic">
                            <img alt="Alternative Front Graphic" style={{ width: '100%' }} src={logofront2}></img>
                        </a>
                        <a className='HTT-flex-item' href={logoback2} data-fancybox data-caption="Alternative Back Graphic">
                            <img alt="Alternative Back Graphic" style={{ width: '100%' }} src={logoback2}></img>
                        </a>
                    </div>
                    <div className='EnggWeekLogo-page-body-about-container'>
                        <p className='EnggWeekLogo-page-body-about'>About this project</p>
                        <div className='EnggWeekLogo-page-body-about-line' />
                    </div>
                    <p className='EnggWeekLogo-page-body'>This is my submission for a Logo-Design contest at my university. The topic was Engineer's week - the logo was to be printed on T-shirts. I designed the front and back of the t-shirt while keeping space for additional university sponsor logos on the back of the tee.</p>
                </div>
            </div>
            <Footer />
        </div>
    );
});
export default EnggWeekLogo;
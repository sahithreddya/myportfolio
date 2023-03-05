import React from 'react';
import './Styles/LinkApp.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
import { useEffect } from "react";
import { LinkAppImgSources } from '../Data/ImageExport.js';

import { Carousel } from "@fancyapps/ui/dist/carousel/carousel.esm.js";
import { Fancybox } from "@fancyapps/ui/dist/fancybox/fancybox.esm.js";
import { Thumbs } from "@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js";
import "@fancyapps/ui/dist/carousel/carousel.thumbs.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";  
// Added below css to index.html through a CDN
// import "@fancyapps/ui/dist/carousel/carousel.css";

const LinkApp = React.forwardRef((props, ref) => {
    // let location = useLocation();
    // console.log("val is ", + location);

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
        const container = document.getElementById("myCarousel");
        const container2 = document.getElementById("myCarousel-2");
        const options = {
            infinite: true,
            adaptiveHeight: true,
            Thumbs: {
                type: "classic",
            },
            Dots: {
                // minCount: 2,
                // dynamicFrom: 2,
                dotTpl: `<button style={{color:#FFFFFF}} type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>`
            },
            // Navigation: false
        };
        const fc = new Carousel(container, options, { Thumbs });
        const fc2 = new Carousel(container2, options, { Thumbs });
    });

    Fancybox.bind("[data-fancybox]", {
        // compact: () => window.matchMedia("(max-width: 100px)")
        // Your custom options
    });

    let getImages = (type) => LinkAppImgSources[type].map((val) => <img style={{ height: "fit-content" }} class="f-carousel__slide" data-fancybox data-thumb={val.src} alt="app screenshots" src={val.src} />);


    return (
        <div className='LA-page-container'>
            <HeaderBar />
            <div className='LA-page-content'>
                <div>
                    <p className='LA-page-title'>LinkApp</p>
                    <p className='LA-page-subtitle'>UI/UX Design</p>
                </div>
                <div className='LA-page-body-container'>
                    <p className='LA-page-body' style={{ fontStyle: "italic", marginTop: 0, marginBottom: "2em" }}>P.S: Because of my NDA, I will be sharing limited information regarding this project. The screens I’ve included below are done so with permission. If you need more context, please contact me at <b>sahithreddy.a@gmail.com</b>.</p>
                    <div className='LA-page-body-about-container'>
                        <p className='LA-page-body-about'>About this project</p>
                        <div className='LA-page-body-about-line' />
                    </div>
                    <p className='LA-page-body'>An ongoing retail business app project I’ve been working on. My work included designing wireframes and interfaces for the mobile app, along with conducting research on competitors and the targeted customer base. The customer base includes users who aren't entirely literate when it comes to digital tools, and therefore the design language is simple and makes use of universal signifiers.</p>
                    <div className='LA-page-body-about-container'>
                        <p className='LA-page-body-about'>What I've learned</p>
                        <div className='LA-page-body-about-line' />
                    </div>
                    <ul className='LA-page-body'>
                        <li>Creating a proper design system in <b>Adobe XD</b>, which helps in maintaining consistency across a product.</li>
                        <li><b>How to create an app introduction</b> which inspires and informs new users of the product, leading to a quality onboarding experience.</li>
                        <li><b>Making the app more accessible</b> through design decisions.</li>
                    </ul>
                    <div className='LA-img-container'>
                        <div className='LA-img-src-container'>
                            <div className="f-carousel LA-carousel" id="myCarousel">
                                <div className="f-carousel__viewport">
                                    <div className="f-carousel__track">
                                        {getImages("contactList")}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className='LA-page-body LA-carousel-text'>User's contact list of customers and their profiles. User can add notes against each customer as a reminder or keep track of any pending fulfillment.</p>
                    </div>
                    <div className='LA-img-container'>
                        <p className='LA-page-body LA-carousel-text'>Merchant profile creation flow is for the user to create a profile for his business. There are multiple configurations available for the user to set up their profile accordingly.</p>
                        <div className='LA-img-src-container'>
                            <div className="f-carousel LA-carousel" id="myCarousel-2">
                                <div className="f-carousel__viewport">
                                    <div className="f-carousel__track">
                                        {getImages("merchantOptions")}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
});
export default LinkApp;
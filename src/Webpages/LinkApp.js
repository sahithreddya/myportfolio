import React from 'react';
import './Styles/LinkApp.css'
import HeaderBar from '../Components/HeaderBar.js'
import Footer from '../Components/Footer';
// import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
// import ImageViewer from '../Components/ImageViewer';
import { LinkAppImgSources } from '../Data/ImageExport.js';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

const LinkApp =  React.forwardRef((props, ref) => {
    // let location = useLocation();
    // console.log("val is ", + location);

    // added since scroll position from previous page was being used
    useEffect(() => {
        window.scrollTo(0, 0);
      });

    let getImages = (type) => LinkAppImgSources[type].map((val) => <img src={val.src} />);

    return (
        <div className='LA-page-container'>
            <HeaderBar/>
            <div className='LA-page-content'>
                <div>
                    <p className='LA-page-title'>LinkApp</p>
                    <p className='LA-page-subtitle'>Mobile Interface Design</p>
                    {/* <div className='colorBarHorizontal'/>
                    <div className='colorBarHorizontal'/> */}
                </div>
                <div className='LA-page-body-container'>
                    <p className='LA-page-body' style={{fontStyle: "italic", marginTop: 0, marginBottom: "2em"}}>P.S: Because of my NDA, I will be sharing limited information regarding this project. The screens I’ve included below are done so with permission. If you need more context, please contact me at <b>sahithreddy.a@gmail.com</b>.</p>
                    <div className='LA-page-body-about-container'>
                        <p className='LA-page-body-about'>About this project</p>
                        <div className='LA-page-body-about-line'/>
                    </div>
                    <p className='LA-page-body'>An ongoing retail business app project I’ve been working on. My work included designing wireframes and interfaces for the mobile app, along with conducting research on competitors and the targeted customer base. The customer base includes users who aren't entirely literate when it comes to digital tools, and therefore the design language is simple and makes use of universal signifiers.</p>
                    <div className='LA-page-body-about-container'>
                        <p className='LA-page-body-about'>What I've learned</p>
                        <div className='LA-page-body-about-line'/>
                    </div>
                    <ul className='LA-page-body'>
                        <li>Creating a proper design system in <b>Adobe XD</b>, which helps in maintaining consistency across a product.</li>
                        <li><b>How to create an app introduction</b> which inspires and informs new users of the product, leading to a quality onboarding experience.</li>
                        <li><b>Making the app more accessible</b> through design decisions.</li>
                    </ul>
                    <div className='LA-img-container'>
                        {/* <ImageViewer imgClass="linkappimg" imgArray={LinkAppImgSources?.contactList}/> */}
                        <Carousel className="LA-carousel" infiniteLoop={true} showThumbs={false} style={styles} dynamicHeight={true}>
                            {getImages("contactList")}
                        </Carousel>
                        <p className='LA-page-body LA-carousel-text'>User's contact list of customers and their profiles. User can add notes against each customer as a reminder or keep track of any pending fulfillment.</p>
                    </div>
                    <div className='LA-img-container'>
                    <p className='LA-page-body LA-carousel-text'>Merchant profile creation flow is for the user to create a profile for his business. There are multiple configurations available for the user to set up their profile accordingly.</p>
                        <Carousel className="LA-carousel" infiniteLoop={true} showThumbs={false} dynamicHeight={true} style={styles}>
                            {getImages("merchantOptions")}
                        </Carousel>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
});
export default LinkApp;
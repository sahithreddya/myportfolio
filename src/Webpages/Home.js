import React, { useEffect } from 'react';
import './Styles/Home.css';
import InitializeGoogleAnalytics, { TrackGoogleAnalyticsEvent } from '../GoogleAnalytics/googleanalytics4';

import HomePage from '../Components/HomePage';
import Work from '../Components/Work';
import Separator from '../Components/Separator';
import Footer from '../Components/Footer';
import HeaderBar from '../Components/HeaderBar';
import { useRef } from 'react';

const Home = () => {

  useEffect(()=>{
    InitializeGoogleAnalytics(); //initializing GA4
    TrackGoogleAnalyticsEvent( "User Activity", "visited homepage", window.location.pathname );
  })
  const ref = useRef();
  const scroll = () => ref?.current?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="Home">
      <HeaderBar/>
      <HomePage scrollFunc={() => scroll()} openLink={(url) => window.open(url)} test={() => test()}/>
      <Separator/>
      <Work ref={ref}/>
      <Footer/>
    </div>
  );
}


export default Home;

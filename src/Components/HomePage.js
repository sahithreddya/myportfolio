import '../Styles/HomePage.css';
import more from '../Assets/Icons/more.svg';
import React, { useEffect } from 'react';
import resume from '../Assets/Files/MyResume.pdf'
// import Marquee from "react-fast-marquee";
import { Link, useLocation } from "react-router-dom";
import { onLinkClick } from './Footer';

const HomePage = React.forwardRef((props, ref) => {
  
  let location = useLocation();

  useEffect(() => {
    if((location?.state?.to) === 'work') {
      props.scrollFunc()
    }
    if(((location?.state?.from) === '/') && (location?.state?.to) === 'home') {
      window.scrollTo({top: 0, behavior: "smooth"});
    }
  });

  return (
    <div ref={ref} className="HomePage">
      <div className='page-img'/>
      {/* <div className='in-progress'>
        <Marquee gradient={false} speed={50} style={{color: 'white', fontFamily: 'Body-Primary'}}>⚠ SITE CURRENTLY IN PROGRESS ⚠ --- will be finished soon! ✅😁</Marquee>
      </div> */}
      <div className='Intro'>
        <p className='hello-class'>Hello, <br/> I'm Sahith.</p>
        <p className='hello-body'>I'm a UI/UX designer solving problems and creating great experiences for users.</p>
        {/* <a className='profile-link' onClick={() => onLinkClick("linkedin")}><br/><FaLink style={{verticalAlign: '-0.125em', marginRight: "1em"}} color="#664771"/> LinkedIn</a>
        <a className='profile-link' onClick={() => onLinkClick("behance")}><br/><FaLink style={{verticalAlign: '-0.125em', marginRight: "1em"}} color="#664771"/> Behance</a> */}
        <div className='social'>
          <div onClick={() => onLinkClick("behance")}>BEHANCE</div>
          <div>/</div>
          <div onClick={() => onLinkClick("linkedin")}>LINKEDIN</div>
          <div>/</div>
          <div onClick={() => onLinkClick("medium")}>MEDIUM</div>
          <div>/</div>
          <div onClick={() => onLinkClick("github")}>GITHUB</div>
        </div>
      </div>
      <div className='Menu'>
        <p className='menu-serial'>01</p>
        <p className='menu-class' onClick={props.scrollFunc}>Work</p>
        <Link to={{ pathname: `/About` }} style={{ textDecoration: "none" }}>
          <p className='menu-serial'>02</p>
        </Link>
        <Link to={{ pathname: `/About` }} style={{ textDecoration: "none" }}>
          <p className='menu-class'>About</p>
        </Link>
        <p className='menu-serial'>03</p>
        <p className='menu-class' onClick={() => props.openLink(resume)}>Résumé</p>
      </div>
      <img src={more} onClick={props.scrollFunc} className="more-icon" alt="more-icon"/>
    </div>
  );
});

export default HomePage;

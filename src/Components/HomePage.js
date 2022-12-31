import '../Styles/HomePage.css';
import more from '../Assets/Icons/more.svg';
import React from 'react';
import { FaLink } from 'react-icons/fa';
import resume from '../Assets/Files/MyResume.pdf'
import Marquee from "react-fast-marquee";
// import { useHistory } from 'react-router-dom';

const HomePage = React.forwardRef((props, ref) => {
  // const history = useHistory();
  // const handleOnClick = (address) => history.push(`/${address}`);

  return (
    <div ref={ref} className="HomePage">
      <div className='page-img'/>
      <div className='in-progress'>
        <Marquee gradient={false} speed={50} style={{color: 'white', fontFamily: 'Body-Primary'}}>⚠ SITE CURRENTLY IN PROGRESS ⚠ --- will be finished soon! ✅😁</Marquee>
      </div>
      <div className='Intro'>
        <p className='hello-class'>Hello, <br/> I'm Sahith.</p>
        <p className='hello-body'>I'm an aspiring UX designer looking to solve problems and create great experiences for users.</p>
        <a className='profile-link' href='https://www.linkedin.com/in/sahithreddya/'><br/><FaLink style={{verticalAlign: '-0.125em', marginRight: "1em"}} color="#664771"/> LinkedIn</a>
        <a className='profile-link' href='https://www.behance.net/sahithreddya'><br/><FaLink style={{verticalAlign: '-0.125em', marginRight: "1em"}} color="#664771"/> Behance</a>
      </div>
      <div className='Menu'>
        <p className='menu-serial'>01</p>
        <p className='menu-class' onClick={props.scrollFunc}>Work</p>
        <p className='menu-serial'>02</p>
        <p className='menu-class'>About</p>
        <p className='menu-serial'>03</p>
        <p className='menu-class' onClick={() => props.openLink(resume)}>Résumé</p>
      </div>
      <img src={more} onClick={props.scrollFunc} className="more-icon" alt="more-icon"/>
    </div>
  );
});

export default HomePage;

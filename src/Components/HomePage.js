import '../Styles/HomePage.css';
import more from '../Assets/Icons/more.svg';
import React from 'react';
import { useHistory } from 'react-router-dom';

// Testing default branch change 

const HomePage = React.forwardRef((props, ref) => {
  const history = useHistory();
  const handleOnClick = (address) => history.push(`/${address}`);

  return (
    <div ref={ref} className="HomePage">
      <div className='page-img'/>
      <div className='Intro'>
        <p className='hello-class'>Hello, <br/> I'm Sahith.</p>
        <p className='hello-body'>I'm an aspiring UX designer looking to solve problems and create great experiences for users.</p>
      </div>
      <div className='Menu'>
        <p className='menu-serial'>01</p>
        <p className='menu-class'>Work</p>
        <p className='menu-serial'>02</p>
        <p className='menu-class'>About</p>
        <p className='menu-serial'>03</p>
        <p className='menu-class'>Résumé</p>
      </div>
      <img src={more} className="more-icon"/>
    </div>
  );
});

export default HomePage;

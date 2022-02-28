import React from 'react';
import './Home.css';

import HomePage from '../Components/HomePage';
import Work from '../Components/Work';
import { useRef } from 'react';

const Home = () => {
  const ref = useRef();
  const scroll = () => {console.log("test"); ref?.current?.scrollIntoView({ behavior: "smooth" })};
  const test = () => {console.log("test func")};

  return (
    <div className="Home">
      <HomePage scrollFunc={() => scroll()} test={() => test()}/>
      {/* <Work ref={ref}/> */}
    </div>
  );
}


export default Home;

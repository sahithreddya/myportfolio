import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import './index.css';
import Mirkwood from './Webpages/Mirkwood';
import Home from './Webpages/Home';
import LinkApp from './Webpages/LinkApp';
import Beagle from './Webpages/Beagle';
import AboutMe from './Webpages/AboutMe';
import HydTT from './Webpages/HydTT';

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<AboutMe />} />
      <Route path="/LinkApp" element={<LinkApp />} />
      <Route path="/Beagle" element={<Beagle />} />
      <Route path="/Hyderabad%20Tourism%20Website" element={<HydTT />} />
      <Route path = "*" element = {<Mirkwood/>} />
    </Routes>
  </Router>,
  rootElement);

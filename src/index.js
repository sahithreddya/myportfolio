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

const rootElement = document.getElementById("root");
render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LinkApp" element={<LinkApp />} />
      <Route path="/Beagle" element={<Beagle />} />
      <Route path = "*" element = {<Mirkwood/>} />
    </Routes>
  </Router>,
  rootElement);

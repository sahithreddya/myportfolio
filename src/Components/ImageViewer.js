import '../Styles/ImageViewer.css';
import navbtn from '../Assets/Icons/navbtn.svg'
import React from 'react';
import { useEffect } from 'react';

const ImageViewer = React.forwardRef((props, ref) => {

  useEffect(() => {
    showDivs(slideIndex);
  });
  
  // console.log(props);

  const createImgTags = () => props.imgArray?.map((val) => <img src={val.src} className={props.imgClass} style={{ display: "none" }} onClick={() => plusDivs(1)} alt="screenshot"></img>);
  const createNavButtons = () => props.imgArray?.map((val, index) => <img src={navbtn} className="nav-btn nav-btn-enabled" onClick={() => currentDiv(index+1)} alt="nav button"></img>);
 
  let slideIndex = 1;

  let plusDivs = (n) => showDivs(slideIndex += n);

  let currentDiv = (n) => {
    // console.log("clicked " + n);
    showDivs(slideIndex = n);
  }

  let showDivs = (n) => {
    let i;
    let x = document.getElementsByClassName("linkappimg");
    let dots = document.getElementsByClassName("nav-btn");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("nav-btn-enabled", "");
    }
    if(x.length > 0) {
      x[slideIndex - 1].style.display = "block";
    }
    if (dots.length > 0) {
      dots[slideIndex - 1].className += "nav-btn-enabled";
    }
  }

  return (
    <div ref={ref} className='ImageViewer'>
      <div className='image-container'>
        {createImgTags()}
      </div>
      <div className='nav-buttons'>
        {createNavButtons()}
      </div>
    </div>
  );
});

export default ImageViewer;

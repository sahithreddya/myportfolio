import '../Styles/Footer.css';
import React from 'react';

const Footer = React.forwardRef((props, ref) => { 

  return (
    <div ref={ref} className='footer'>
      <div className='footer-content'>
        <p className='name'>SAHITH REDDY</p>
        <p className='info' onClick={() => onLinkClick("city")}>Hyderabad</p>
        <p className='info' onClick={() => onLinkClick("email")}>sahithreddy.a@gmail.com</p>
        <p className='info' onClick={() => onLinkClick("phone")}>(+91) 9052052849</p>
        <div className='social' id="social">
          <div onClick={() => onLinkClick("linkedin")}>LINKEDIN</div>
          <div>/</div>
          <div onClick={() => onLinkClick("medium")}>MEDIUM</div>
          <div>/</div>
          <div onClick={() => onLinkClick("github")}>GITHUB</div>
        </div>
      </div>
    </div>
  );
});

const onLinkClick = (context) => {
  switch(context) {
    case "city":
      window.open("https://en.wikipedia.org/wiki/Hyderabad");
      break;
    case "email":
      window.open("http://mailto:sahithreddy.a@gmail.com");
      break;
    case "phone":
      window.open("tel:+91 9052052849");
      break;
    case "linkedin":
      window.open("https://www.linkedin.com/in/sahith-reddy-7352b0136");
      break;
    case "medium":
      window.open("https://medium.com/@sahithreddy.a");
      break;
    case "github":
      window.open("https://github.com/shutrmovick");
      break;
    default:
      break;
  }

}

export default Footer;

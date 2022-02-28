import '../Styles/Work.css';
import React from 'react';
import { useHistory } from 'react-router-dom';


const Work = React.forwardRef((props, ref) => {
  const history = useHistory();
  const handleOnClick = (address) => history.push(`/${address}`);

  return (
    <div ref={ref} className="Work">
      <div className="WorkContainer">
        <div className="WorkItem">
          <div className="WorkImageContainer">
            <div className="WorkImage" onClick={() => handleOnClick('cookiecartel')}/>
          </div>
          <div className="WorkTitleContainer">
            <p className="work-title">The Cookie Cartel</p>
            <p className="work-type">Web interface design</p>
            <p className="work-body">Created a web design for an e-commerce website in the F&B industry. </p>
          </div>
        </div>
        <div className="WorkItem">
          <div className="WorkImageContainer">
          <div className="WorkImage" onClick={() => handleOnClick('work')}/>
          </div>
          <div className="WorkTitleContainer">
            <p className="work-title">The Cookie Cartel</p>
            <p className="work-type">Web interface design</p>
            <p className="work-body">Created a web design for an e-commerce website in the F&B industry. </p>
          </div>
        </div>
      </div>
      {/* <img src={more} className="more-icon" /> */}
    </div>
  );
});

export default Work;

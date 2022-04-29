import '../Styles/Work.css';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { workItems } from '../Data/WorkData';

const Work = React.forwardRef((props, ref) => {
  const history = useHistory();
  const handleOnClick = (address) => history.push(`/${address}`);

  const workItemRender = () => workItems.map((item) =>
  <div className="stackIndex-wrapper">
    <div className="WorkItem">
      <div className="WorkImageContainer">
        <div className="WorkImage" onClick={() => handleOnClick('cookiecartel')} style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.imgPath})` }} />
      </div>
      <div className="WorkTitleContainer">
        <div className="work-title">{item.title}</div>
        <div className="work-type">{item.subtitle}</div>
        {/* <div className="work-body">{item.body}</div> */}
      </div>
      <div className="depthBar"></div>
    </div>
  </div>
  );

  return (
    <div ref={ref} className="Work">
      {/* <div className="NavBar">
        <div className="NavBarLogo"/>
      </div> */}
      {/* <div className="NavBtn"/>       TODO : navigation button */}
      <div className="WorkContainer">
        {workItemRender()}
      </div>
      {/* <div className="NavBtn"/>       TODO : navigation button */}
    </div>
  );
});

export default Work;

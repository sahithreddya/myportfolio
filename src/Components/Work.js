import '../Styles/Work.css';
import React from 'react';
import { Link } from "react-router-dom";
import { workItems } from '../Data/WorkData';


const Work = React.forwardRef((props, ref) => {

  const workItemRender = () => workItems.map((item) =>
  <Link to={{pathname: `/${item.title}`}} style={{ textDecoration: "none"}}>
    <div className="stackIndex-wrapper">
      <div className="WorkItem">
        <div className="WorkImageContainer">
          <div className="WorkImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + item.imgPath})` }} />
        </div>
        <div className="WorkTitleContainer">
          <div className="work-title">{item.title}</div>
          <div className="work-type">{item.subtitle}</div>
          {/* <div className="work-body">{item.body}</div> */}
        </div>
        <div className="depthBar"></div>
        {/* <div className="depthBarSide"></div> Better hover*/}
      </div>
    </div>
  </Link>
  );

  return (
    <div ref={ref} className="Work">
      <div className="WorkContainer">
        {workItemRender()}
      </div>
    </div>
  );
});

export default Work;

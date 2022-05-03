import '../Styles/Work.css';
import React from 'react';
import { Link } from "react-router-dom";
import { workItems } from '../Data/WorkData';


const Work = React.forwardRef((props, ref) => {
  // const history = useHistory();
  // const handleOnClick = (value) => history.push({ path: `/${value.title}`, state: { val: "test data" }});

  const workItemRender = () => workItems.map((item) =>
  <Link to={`/${item.title}`} style={{ textDecoration: "none"}}>
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

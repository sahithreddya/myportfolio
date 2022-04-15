import '../Styles/Separator.css';
import more from '../Assets/Icons/more.svg';
import React from 'react';
import { useHistory } from 'react-router-dom';

const Separator = React.forwardRef((props, ref) => {
  const history = useHistory();
  const handleOnClick = (address) => history.push(`/${address}`);

  return (
    <div ref={ref} className='Seperator'>
      <div className='content'/>
    </div>
  );
});

export default Separator;

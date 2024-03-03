import '../Styles/Separator.css';
import React from 'react';

const Separator = React.forwardRef((props, ref) => {

  return (
    <div ref={ref} className='Seperator'>
      <div className='content'/>
    </div>
  );
});

export default Separator;

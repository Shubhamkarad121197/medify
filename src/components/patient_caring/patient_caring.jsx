
import React from 'react';
import patientCaringImage from '../../assets/parent_Caring.png'; // Ensure you have an image in this path       
const ParentCaring = () => {
  return <div className='parent-caring-container'

  >
    <img src={patientCaringImage}  style={{width: '1153px',height: '486px'}}/>
  </div>;
}

export default ParentCaring;
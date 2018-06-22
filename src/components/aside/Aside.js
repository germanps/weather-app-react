import React from 'react';
import asideImage from './../../content/img/aside.png';
import './Aside.css'; 
const Aside = () => (
   <div className="col-md-3 wa-aside">
      <img src={asideImage} alt="imagen aside" />
   </div>
);

export default Aside;
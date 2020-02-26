import React from 'react';
import './css/share.scss';

function Share() {
   return (
      <div className="share mx-auto">
         <div className="share__text">
            <h1>Like this tool?</h1>
            <p>If you like my tool, please share on Social Media to earn my forever love.</p>
         </div>
         <div className="share__icon">
            <a href="https://twitter.com/intent/tweet?text=I%20just%20found%20out%20about%20this%20design%20tool%20that%20allows%20me%20to%20create%20beautiful%20drop%20shadows.%20Check%20it%20out%20dropshadow.io" target="_blank" rel="noopener noreferrer">
               <span className="d-inline-block d-md-none">SHARE</span>
               <img src="./images/TwitterIcon.svg" alt="Twitter icon"/>
            </a>
         </div>
      </div>
   );
}

export default Share;
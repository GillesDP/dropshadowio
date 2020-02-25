import React from 'react';
import './css/navbarPreview.scss';

function NavbarPreview() {
   return (
      <div className="preview">
         <div className="preview--navbar">
            <div className="preview--navbar__menu">
               <div className="preview--navbar__brand">

               </div>
               <div className="preview--navbar__links">
                  <div className="preview--navbar__item">
                     Home
                  </div>
                  <div className="preview--navbar__item">
                     About
                  </div>
                  <div className="preview--navbar__item">
                     Contact
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default NavbarPreview;
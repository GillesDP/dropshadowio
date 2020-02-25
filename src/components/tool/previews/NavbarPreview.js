import React from 'react';
import './css/navbarPreview.scss';

function NavbarPreview(props) {
   let colors = props.data.colors;
   const menuStyle = {
      background: "white",
      boxShadow: props.getCode()
   }
   //"rgba(57,29,213,0.25)" 

   return (
      <div className="preview">
         <div className="preview--navbar" style={{background: colors.background.hex}}>
            <div className="preview--navbar__menu" style={menuStyle}>
               <div className="preview--navbar__brand">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                     <g id="Group_8" data-name="Group 8" transform="translate(-784 -1209)">
                        <g id="Ellipse_5" data-name="Ellipse 5" transform="translate(784 1209)" fill="none" stroke={colors.box.hex} strokeWidth="2">
                           <circle cx="10" cy="10" r="10" stroke="none"/>
                           <circle cx="10" cy="10" r="9" fill="none"/>
                        </g>
                        <g id="Rectangle_42" data-name="Rectangle 42" transform="translate(794 1219)" fill={`rgba(${colors.box.rgb.r}, ${colors.box.rgb.g}, ${colors.box.rgb.b}, .25)`} stroke={colors.box.hex} strokeWidth="2">
                           <rect width="18" height="18" stroke="none"/>
                           <rect x="1" y="1" width="16" height="16" fill="none"/>
                        </g>
                     </g>
                  </svg>
               </div>
               <div className="preview--navbar__links">
                  <div className="preview--navbar__item" style={{color: colors.box.hex}}>
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
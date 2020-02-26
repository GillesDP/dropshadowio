import React from 'react';
import './css/buttonPreview.scss';

function ButtonPreview(props) {
   let colors = props.data.colors;
   const previewStyle = {
      background: props.invert ? colors.box.hex : colors.background.hex
   }
   const buttonStyle = {
      background: props.invert ? colors.background.hex : colors.box.hex,
      color: props.invert ? colors.box.hex : colors.background.hex,
      boxShadow: props.data.getCode()
   }
   const iconStyle = {
      borderRight: `1px solid rgba(${colors.box.rgb.r}, ${colors.box.rgb.g}, ${colors.box.rgb.b}, .2)`
   }

   return (
      <div className="preview" style={{margin: ".5em 0"}}>
         <div className="preview--button" style={previewStyle}>
            <button style={buttonStyle}>
               {props.icon ? 
                  <div className="preview--button__icon" style={iconStyle}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23">
                        <g id="Icon" transform="translate(-515 -1321)">
                           <circle id="Ellipse_3" data-name="Ellipse 3" cx="4.5" cy="4.5" r="4.5" transform="translate(522 1328)" fill={props.invert ? colors.box.hex : colors.background.hex}/>
                           <circle id="Ellipse_4" data-name="Ellipse 4" cx="11.5" cy="11.5" r="11.5" transform="translate(515 1321)" fill={props.invert ? colors.box.hex : colors.background.hex} stroke={props.invert ? colors.box.hex : colors.background.hex} opacity="0.2"/>
                        </g>
                     </svg>
                  </div> 
               : null}
               <div className="preview--button__text">{props.children}</div>
            </button>
         </div>
      </div>
   );
}

/*
PROPS:
   - icon: boolean
   - invert: boolean (invert box/background)
*/

export default ButtonPreview;
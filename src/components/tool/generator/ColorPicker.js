import React, { useState } from 'react';
import { ChromePicker } from 'react-color'
import './css/colorpicker.scss';

function ColorPicker(props) {
   const [displayColorPicker, setDisplayColorPicker] = useState(false);

   let colorPickerStyle = {
      position: "absolute",
      zIndex: "3",
      marginTop: ".5em"
   }

   function handleClick() {
      if (displayColorPicker !== true) setDisplayColorPicker(true);
      if (displayColorPicker === true) setDisplayColorPicker(false);
   }

   return (
      <div className="input input--color-picker">
         <label htmlFor={`${props.type}Color`}>{props.label}</label>
         <div className="input-group" onClick={handleClick}>
            <div className="input--color-picker__preview" style={{background: props.value.hex}}></div>
            <input type="text" id={`${props.type}Color`} value={props.value.hex} readOnly/>
         </div>
         {displayColorPicker === true ? 
            <div style={colorPickerStyle}>
               <ChromePicker color={props.value} onChange={props.changeValue} disableAlpha/>
            </div> 
            : null}
      </div>
   );
}

/*
PROPS:
   - type: string (background, box, shadow)
   - label: string
   - value: string (color)
*/

export default ColorPicker;
import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import './css/colorpicker.scss';
var { EditableInput } = require('react-color/lib/components/common');

function ColorPicker(props) {
   const [displayColorPicker, setDisplayColorPicker] = useState(false);

   let colorPickerStyle = {
      position: "absolute",
      zIndex: "3",
      marginTop: ".5em"
   }
   let editableInputStyle = {
      input: {
         zIndex: "1"
      },
      label: {
         display: "none"
      }
   }

   function handleClick() {
      if (displayColorPicker !== true) setDisplayColorPicker(true);
      if (displayColorPicker === true) setDisplayColorPicker(false);
   }

   function handleClose() {
      setDisplayColorPicker(false);
   }

   // Form validation for EditableInput
   function handleChange(obj) {
      console.log(obj)
      if (obj.hex.substring(0,1) !== "#") {
         props.changeValue({hex: "#000000"});
      } else {
         props.changeValue(obj);
      }
   }

   return (
      <div className="input input--color-picker">
         <label htmlFor={`${props.type}Color`}>{props.label}</label>
         <div className="input-group" onClick={handleClick}>
            <div className="input--color-picker__preview" style={{background: props.value.hex}}></div>
            <input type="text" id={`${props.type}Color`} value={props.value.hex} readOnly/>
            {/* <EditableInput label="hex" value={props.value.hex} onChange={handleChange} style={editableInputStyle}/> */}
         </div>
         {displayColorPicker === true ? 
            <React.Fragment>
               <div style={{position: "fixed", top: 0, right: 0, left: 0, bottom: 0, zIndex: 2}} onClick={handleClose}></div>
               <div style={colorPickerStyle}>
                  <ChromePicker color={props.value} onChange={props.changeValue} disableAlpha/>
               </div> 
            </React.Fragment>
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
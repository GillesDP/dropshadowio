import React from 'react';
import './css/input.scss';

function Input(props) {

   function handleChange(e) {
      // Set input borders
      let value;
      if (e.target.value >= -110 && e.target.value <= 110) {
         value = e.target.value;
      } else if (e.target.value <= -110) {
         value = -110;
      } else if (e.target.value >= 110) {
         value = 110;
      } else {
         value = 0;
      }

      // Set data of offset
      if (e.target.id === "xOffset") {
         props.changeData(prev => {
            return {...prev, offset: {...prev.offset, x: value}}
         });
      } else if (e.target.id === "yOffset") {
         props.changeData(prev => {
            return {...prev, offset: {...prev.offset, y: value}}
         });
      }
   }

   return (
      <div className="generator-input">
         <div className="input-group">
            <input 
               type={props.type}
               id={props.id} 
               name={props.name}
               value={props.value}
               onChange={handleChange}
               min="-90"
               max="90"
            />
            <div className="input-group-append">
               <span className="input-group-text">{props.id.substring(0,1)}</span>
            </div>
         </div>
      </div>  
   );
}

export default Input;
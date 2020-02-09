import React from 'react';
import './css/radio.css';

function Radio(props) {

   function handleClick(e) {
      let el = e.target
      if (el.id === "outsetRadio") {
         props.changeValue(true);
      } else if (el.id === "insetRadio") {
         props.changeValue(false);
      }
   }

   return (
      <div className="radio-group">
         {props.options.map((c, i) => {
            return (
               <button key={i} id={`${c}Radio`} onClick={handleClick}>{c} {props.value.toString()}</button>
            );
         })}
      </div>
   );
}

/*
PROPS:
   - options: array
*/

export default Radio;
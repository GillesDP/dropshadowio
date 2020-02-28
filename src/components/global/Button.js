import React from 'react';
import './css/button.scss';

function Button(props) {
   return (
      <button type="button" className={`button${props.theme === "blue" ? " button--blue" : props.theme === "border" ? " button--border" : ""}`}>
         {props.children}
      </button>
   );
}

/*
PROPS:
   - theme: string blue|border
*/

export default Button;
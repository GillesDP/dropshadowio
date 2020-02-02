import React from 'react';
import './css/input.css';

function Input(props) {
   return (
      <div className="input-group generator-input">
         <label htmlFor={props.id}>{props.label}</label>
         <input 
            type={props.type}
            id={props.id} 
            name={props.name}
            value={props.value}
         />
         <div className="input-group-append">
            <span className="input-group-text">px</span>
         </div>
      </div>      
   );
}

export default Input;
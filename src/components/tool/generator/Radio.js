import React, { useState } from 'react';
import './css/radio.scss';

function Radio(props) {
   const [selected, setSelected] = useState(props.default);
   
   function handleChange(e) {
      let value = e.target.value;
      setSelected(value);
      checkInsetOutset(value);
   }

   function checkInsetOutset(val) {
      if (val === props.default) {
         props.changeValue(true);
      } else if (val === props.options[1]) {
         props.changeValue(false);
      } else return;
   }

   return (
      <div className="radio-group">
         {props.options.map((c, i) => {
            return (
               <React.Fragment key={i}>
                  <input 
                     type="radio" 
                     id={`${c}Radio`} 
                     name={props.name} 
                     checked={selected === c ? true : false}
                     value={c} 
                     onChange={handleChange}
                     />
                  <button>
                     <label htmlFor={`${c}Radio`} key={i}><div className="radio-icon"></div> {c}</label>
                  </button>
               </React.Fragment>
            );
         })}
      </div>
   );
}

/*
PROPS:
   - options: array (radio items)
   - name: string (name of radio group)
   - default: string (default value that's selected)
*/

export default Radio;
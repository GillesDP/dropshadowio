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
                     <label htmlFor={`${c}Radio`} key={i}>
                     {c === "outset" ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                           <g id="Group_5" data-name="Group 5" transform="translate(-383 -826)">
                              <g id="Rectangle_25" data-name="Rectangle 25" transform="translate(383 826)" fill="none" stroke={selected === c ? "#fff" : "#1E1F4D"} strokeWidth="2">
                                 <rect width="15" height="15" stroke="none"/>
                                 <rect x="1" y="1" width="13" height="13" fill="none"/>
                              </g>
                              <rect id="Rectangle_26" data-name="Rectangle 26" width="5" height="5" transform="translate(388 831)" fill={selected === c ? "#fff" : "#1E1F4D"} opacity="0.5"/>
                           </g>
                        </svg>
                     : null}
                     {c === "inset" ? 
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15">
                           <g id="Group_34" data-name="Group 34" transform="translate(-793 -818)">
                              <g id="Ellipse_23" data-name="Ellipse 23" transform="translate(793 818)" fill="none" stroke={selected === c ? "#fff" : "#1E1F4D"} strokeWidth="2" opacity="0.5">
                                 <circle cx="7.5" cy="7.5" r="7.5" stroke="none"/>
                                 <circle cx="7.5" cy="7.5" r="6.5" fill="none"/>
                              </g>
                              <circle id="Ellipse_24" data-name="Ellipse 24" cx="2.5" cy="2.5" r="2.5" transform="translate(798 823)" fill={selected === c ? "#fff" : "#1E1F4D"}/>
                           </g>
                        </svg>
                     : null} 
                     {c}
                     </label>
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
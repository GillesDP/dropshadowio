import React from 'react';
import './css/section.scss';

function Section(props) {
   return (
      <div className={`section${props.className ? " " + props.className : ""}`}>
         <div className="container">
            {props.title ? 
               <div className="row">
                  <div className="col">
                     <h1>{props.title}</h1>
                  </div>
               </div>
            :null}
            {props.children}
         </div>
      </div>
   );
}

/*
PROPS:
   - className: string (optional)
   - title: string (optional)
*/

export default Section;
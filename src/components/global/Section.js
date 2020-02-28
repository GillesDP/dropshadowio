import React from 'react';
import './css/section.scss';

function Section(props) {
   return (
      <div className={`section${props.className ? " " + props.className : ""}${props.background === "gray" ? " section--gray" : ""}`}>
         <div className="container" style={props.verticalCenter ? {textAlign: "center"} : null}>
            {props.title ? 
               <div className="row">
                  <div className="col">
                     {props.subtitle ? <h2>{props.subtitle}</h2> : null}
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
   - subtitle: string (optional, only available when there's a title)
   - background: string (optional)
   - verticalCenter: boolean (optional)
*/

export default Section;
import React, {useState} from 'react';
import './css/collapsible.scss';

function Collapsible(props) {
   const content = React.createRef()
   const [collapsed, setCollapsed] = useState(true);
   const [scrollHeight, setScrollHeight] = useState(0);

   function collapse() {
      if (collapsed === true) {
         setCollapsed(false);
         setScrollHeight(content.current.scrollHeight);
      } else {
         setCollapsed(true);
      }
   }

   return (
      <div className="collapsible">
         <div className="collapsible__heading">
            <button type="button" onClick={collapse}>
               {props.heading}
               <svg style={collapsed ? null : {transformOrigin: "center center", transform: "rotate(180deg)"}}xmlns="http://www.w3.org/2000/svg" width="14.142" height="14.142" viewBox="0 0 14.142 14.142">
                  <path id="Union_6" data-name="Union 6" d="M-4292,10V2h-8V0h10V10Z" transform="translate(-3026.417 3047.63) rotate(135)" fill="#391dd5"/>
               </svg>
            </button>
         </div>
         <div ref={content} className="collapsible__content" style={collapsed ? {maxHeight: 0} : {maxHeight: `${scrollHeight}px`}}>
            {props.children}
         </div>
      </div>
   );
}

/*
PROPS:
   - heading: string
*/

export default Collapsible;
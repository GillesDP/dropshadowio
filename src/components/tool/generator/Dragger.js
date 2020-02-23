import React, { useState } from 'react';
import './css/dragger.scss';

function Dragger(props) {
   let [active, setActive] = useState(false);
   
   let draggerOffset = 16;
   let transformStyle = {
      transform: `translate(${props.offset.x}px, ${props.offset.y}px)`
   }

   function handleMouseDown() {
      setActive(true);
   }

   function handleMouseUp() {
      setActive(false)
   }

   function handleMouseMove(e) {
      e.preventDefault();
      const mouseCoords = [e.clientX, e.clientY];

      if (active) {
         let t = e.target

         if (t.className === 'drag-area') {
            // Using the .getBoundingClientRect() I can get an DOMRect obj containing: left, top, right, bottom, x, y, width, height. The positions are relative to the viewport. 
            let dragArea = t.getBoundingClientRect();
            let dragger = t.children.dragger;
   
            newPosition(dragArea, dragger, mouseCoords);
         } else if (t.id === 'dragger') {
            let dragArea = t.parentNode.getBoundingClientRect();
            let dragger = t;

            newPosition(dragArea, dragger, mouseCoords);
         }
      }
   }

   function handleMouseClick(e) {
      e.preventDefault();
      const mouseCoords = [e.clientX, e.clientY];
      let t = e.target
      
      if (t.className === 'drag-area') {
         let dragArea = t.getBoundingClientRect();
         let dragger = t.children.dragger;

         newPosition(dragArea, dragger, mouseCoords);
      }
   }

   function newPosition(area, item, mouseCoords) {
      /* Formula:
         - Take mouse x and y coord
         - Substract coords of dragArea relative to client (so that the dragArea now is placed [0, 0])
         - Substract coords of dragger relative to dragArea (because the dragger is centered inside the dragArea)
         - Center dragger to mouse coords
      */
      let xCoord = mouseCoords[0] - area.left - item.offsetLeft - draggerOffset;
      let yCoord = mouseCoords[1] - area.top - item.offsetTop - draggerOffset;

      // Set borders to area
      const wBorder = area.width / 2;
      const hBorder = area.height / 2;

      if (xCoord >= wBorder) return;
      if (xCoord <= -wBorder) return;
      if (yCoord >= hBorder) return;
      if (yCoord <= -hBorder) return;
      
      // Keep in mind, the y-value is negative when the dragger goes up because of the css transform
      props.changeOffset({x: Math.floor(xCoord), y: Math.floor(yCoord)});
   }

   return (
      <div className="drag-area" onMouseMove={handleMouseMove} onMouseDown={handleMouseDown} onClick={handleMouseClick} onMouseUp={handleMouseUp}>
         <div id="dragger" style={transformStyle}></div>
      </div>
   );
}

export default Dragger;
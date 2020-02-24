import React, { useState } from 'react';
import './css/dragger.scss';

function Dragger(props) {
   const dragArea = React.createRef();
   const dragItem = React.createRef();
   let [active, setActive] = useState(false);
   
   let draggerOffset = 16;
   let draggerStyle = {
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
         newPosition(mouseCoords);
      }
   }

   function handleMouseClick(e) {
      e.preventDefault();
      const mouseCoords = [e.clientX, e.clientY];

      newPosition(mouseCoords);
   }

   function newPosition(mouseCoords) {
      let area = dragArea.current.getBoundingClientRect();
      let item = dragItem.current;

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
      <div 
         className="drag-area" 
         ref={dragArea} 
         onMouseMove={handleMouseMove} 
         onMouseDown={handleMouseDown} 
         onClick={handleMouseClick} 
         onMouseUp={handleMouseUp}
      >
         <div id="dragger" ref={dragItem} style={draggerStyle}></div>
      </div>
   );
}

export default Dragger;
import React, {useState} from 'react';
import './css/slider.css';

function Slider(props) {
   let sliderElement = React.createRef();
   const [active, setActive] = useState(false);
   const [exact, setExact] = useState(0);

   let transformStyle = {
      transform: `translate(${exact}px, 0px)`,
      transition: "none",
      transformOrigin: "center center"
   }
   

   /*** Event ***/

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
   function handleClick(e) {
      e.preventDefault();
      const mouseCoords = [e.clientX, e.clientY];
      
      newPosition(mouseCoords);
   }
   function handleChange(e) {
      let area = sliderElement.current.getBoundingClientRect();
      let inputValue = e.target.value;

      // Doesn't work yet!!
      setExact(checkBorders(xCoord, area));
      props.changeValue(Math.floor(exact / calculateScale(area)));
      // props.changeValue(Math.floor(checkBorders(inputValue, area) / calculateScale(area)));
      // setExact(checkBorders(inputValue, area));
   }


   /*** Functional ***/

   function newPosition(mouseCoords) {
      // Define area and (drag)item
      let area = sliderElement.current.getBoundingClientRect();
      let item = document.getElementById(props.id);
      
      // Calculate the xCoord with formula ( -25 => dragger offset)
      let xCoord = Math.floor(mouseCoords[0] - area.left - item.offsetLeft -25);

      // Set exact position of dragger
      setExact(checkBorders(xCoord, area));
      
      // Devide exact position by scale
      props.changeValue(Math.floor(exact / calculateScale(area)));
   }

   function checkBorders(value, area) {
      // Set borders to area depending on props.center
      const maxValue = area.width;

      // Returns borders when the value outreaches the maxValue
      if (props.center) {
         if (value >= maxValue/2) return (maxValue/2);
         if (value <= -maxValue/2) return (-maxValue/2);
      } else {
         if (value >= maxValue) return maxValue;
         if (value < 0) return 0;
      }

      // Return passed value if within borders
      return value;
   }

   function calculateScale(area) {
      let difference = -props.boundries[0] + props.boundries[1]; // ex: 25
      let exactWidth = area.width; // ex: 250
      return (exactWidth / difference); // ex: 10
   }

   return (
      <div 
         ref={sliderElement} 
         className="slider-input" 
         onMouseDown={handleMouseDown} 
         onMouseUp={handleMouseUp} 
         onMouseMove={handleMouseMove} 
         onClick={handleClick}
         >
         <label htmlFor={props.id}> {props.label} </label>
         <div className="slider-axis" style={props.center ? {justifyContent: "center"} : null}>
            <div className="slider-range"></div>
            <input 
               className="test" 
               id={props.id} 
               value={props.value} 
               type="number" 
               min="0" 
               max="50" 
               style={transformStyle} 
               onChange={handleChange}
            />
         </div>
      </div>
   );
}

/*
PROPS:
   - changeValue: function
   - value: value
   - center: boolean (if true: set 0 to center <-> if false: set 0 to left)
   - boundries: [min, max]
*/

export default Slider;
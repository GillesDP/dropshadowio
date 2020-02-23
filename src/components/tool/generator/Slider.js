import React, {useState} from 'react';
import './css/slider.scss';

function Slider(props) {
   let sliderElement = React.createRef();
   let draggerOffset = 25
   const [active, setActive] = useState(false);
   const [exact, setExact] = useState(0);

   let transformStyle = {
      transform: `translate(${props.center ? exact : exact - draggerOffset}px, 0px)`,
      transition: "none",
      transformOrigin: "center center"
   }
   let axisStyle = {
      width: `${props.center ? exact+125+"px" : exact+"px"}`
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

      // Define exact value
      let exactValue = inputValue * calculateScale(area);

      // Change value by checking if exact value is within borders, then devide by scale
      props.changeValue(checkBorders(exactValue, area) / calculateScale(area));

      // If the input is empty, the value should also be empty
      if (inputValue === "") {
         props.changeValue("");
      }

      // Set exact position
      setExact(checkBorders(exactValue, area));
   }


   /*** Functional ***/

   function newPosition(mouseCoords) {
      // Define area and (drag)item
      let area = sliderElement.current.getBoundingClientRect();
      let item = document.getElementById(props.id);

      // Highlight input text on click
      item.select();
      
      // If dragger is not centered, draggerOffset should be zero (in order to not conflict with transform)
      if (!props.center) draggerOffset = 0;
      // Calculate the xCoord with formula ( -25 => dragger offset)
      let xCoord = Math.floor(mouseCoords[0] - area.left - item.offsetLeft - draggerOffset);

      // Please note, using exact in props.changeValue won't work. That's why we have a seperate variable to define the incoming value
      let val = checkBorders(xCoord, area);

      // Set exact position of dragger
      setExact(val);
      
      // Change value by deviding exact position by scale
      props.changeValue(Math.floor(val / calculateScale(area)));
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
      let difference = -props.boundries[0] + props.boundries[1]; // ex. 25
      let exactWidth = area.width; // ex. 250
      return (exactWidth / difference); // ex. 10
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
            <div className="slider-range" style={axisStyle}></div>
            <input 
               id={props.id} 
               value={props.value} 
               type="number" 
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
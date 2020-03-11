import React, {useState} from 'react';
import './css/slider.scss';

function Slider(props) {
   let sliderElement = React.createRef();
   let draggerElement = React.createRef();
   let draggerOffset = 28;
   // const [active, setActive] = useState(false);
   const [exact, setExact] = useState(0);

   let transformStyle = {
      transform: `translate(${exact}px, 0px)`,
      transition: "none",
      transformOrigin: "center center"
   }
   let axisStyle = {
      width: `${props.center ? `calc(${exact}px + 50%)` : exact+"px"}`
   }

   // Set exact value based on passed value (via props). This function is called when the component is rendered. That way I'm able to reference sliderElement. Second argument is an empty array, meaning it will only execute on first render!
   React.useEffect(() => {
      let area = sliderElement.current.getBoundingClientRect()
      let val = props.value * calculateScale(area);
      setExact(checkBorders(val, area));
   }, []);


   /*** Event ***/

   function handleMouseDown() {
      props.changeActive(true);
   }

   function handleMouseMove(e) {
      e.preventDefault();
      const mouseCoords = [e.clientX, e.clientY];

      if (props.active) {
         newPosition(mouseCoords);
      }
   }

   function handleTouchStart() {
      props.changeActive(true);
   }

   function handleTouchMove(e) {
      const touchCoords = [e.targetTouches[0].clientX, e.targetTouches[0].clientY];

      if (props.active) {
         newPosition(touchCoords);
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
      // Create variable to round value later on
      let round;
      if (!props.round) {
         round = 1
      } else round = props.round;

      // Define area and (drag)item
      let area = sliderElement.current.getBoundingClientRect();
      let item = document.getElementById(props.id);

      // Highlight input text on click
      // item.select();
      
      // Calculate the xCoord with formula ( -28 => dragger offset)
      let xCoord = Math.floor((mouseCoords[0] - area.left - item.offsetLeft - draggerOffset) * round) / round;

      // Please note, using exact in props.changeValue won't work. That's why we have a seperate variable to define the incoming value
      let val = checkBorders(xCoord, area);

      // Set exact position of dragger
      setExact(val);
      
      // Change value by deviding exact position by scale
      props.changeValue(Math.floor((val / calculateScale(area)) * round) / round);
   }

   function checkBorders(value, area) {
      // Set borders to area depending on props.center
      const maxValue = area.width - draggerOffset*2;

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
      let difference = -props.boundries[0] + props.boundries[1]; // ex. 25, 1
      let exactWidth = area.width - draggerOffset*2; // ex. 250, 250
      return (exactWidth / difference); // ex. 10, 250
   }

   return (
      <div 
         ref={sliderElement} 
         className="slider" 
         onMouseDown={handleMouseDown} 
         onMouseMove={handleMouseMove} 
         onClick={handleClick}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onMouseLeave={()=> props.changeActive(false)}
         >
         <label htmlFor={props.id}> {props.label} </label>
         <div className="slider__axis" style={props.center ? {justifyContent: "center"} : null}>
            <div className="slider__range" style={axisStyle}></div>
            <input 
               ref={draggerElement}
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
   - round: num (round number to decimals: 10 -> 0.1, 100 -> 0.01)
*/

export default Slider;
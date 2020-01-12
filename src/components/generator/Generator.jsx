import React, {Fragment, useState} from "react";
import Preview from "./Preview";

function Generator() {
   const [data, setData] = useState({
      position: {
         offset: [5, 10],
         blur: 5,
         spread: 5,
         opacity: 1,
         outset: true
      },
      color: {
         shadow: "#000",
         box: "",
         background: ""
      },
   });
   const [css, setCss] = useState(`${data.position.offset[0]}px ${data.position.offset[1]}px ${data.position.blur}px ${data.position.spread}px ${data.color.shadow} ${data.position.outset ? "" : "inset"}`);


   function handleChange(e) {
      const val = e.target.value;
      const name = e.target.name;

      // Copy old data, change new value of property (name input)
      setData(prev => {
         console.log(prev);
         return {...prev, position: {...prev.position, [name]: val}};
      });
      
   }

   return (
      <Fragment>
         <input onChange={handleChange} placeholder="blur" name="blur" value={data.position.blur} />
         {/* Give data to preview component via an object containing the data object and the css object */}
         <Preview shadowData={{data, css}}/>
      </Fragment>);
}

export default Generator;
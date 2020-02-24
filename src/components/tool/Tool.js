import React, {useState} from 'react';
import Generator from './generator/Generator';
import Debug from './Debug';

function Tool() {
   const [data, setData] = useState({
      offset: {x: 0, y: 0},
      blur: 0,
      spread: 0,
      outset: true,
      colors: {
         shadow: {hex: "#000000", rgb: {r: 0, g: 0, b: 0, a: 1}},
         box: {hex: "#391DD5", rgb: {r: 152, g: 35, b: 206, a: 1}},
         background: {hex: "#FFFFFF", rgb: {r: 255, g: 255, b: 255, a: 1}}
      }
   });

   return (
      <React.Fragment>
         <Generator 
            data={data}
            changeData={(obj) => setData(obj)} 
         />
         <Debug
            data={data}
         />
      </React.Fragment>
   );
}

export default Tool;
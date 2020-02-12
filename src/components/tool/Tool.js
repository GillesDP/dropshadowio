import React, {useState} from 'react';
import Generator from './generator/Generator';
import Debug from './Debug';

function Tool() {
   const [data, setData] = useState({
      offset: {x: 0, y: 0},
      blur: 0,
      spread: 0,
      outset: true
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
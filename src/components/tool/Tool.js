import React, {useState} from 'react';
import Generator from './generator/Generator';

function Tool() {
   const [data, setData] = useState({
      offset: {x: 0, y: 0},
      blur: 0,
      spread: 0,
      outset: true
   });

   return (
      <Generator 
         data={data}
         changeData={(obj) => setData(obj)} 
      />
   );
}

export default Tool;
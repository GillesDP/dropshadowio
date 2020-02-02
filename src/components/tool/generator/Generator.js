import React from 'react';
import Dragger from './Dragger';
import Input from './Input';

function Generator() {
   return (
      <div className="container pt-5 random">
         <Dragger/>
         <Input label="x-offset" id="xOffset" name="xoff" type="number" value="4"/>
         <Input label="y-offset" id="yOffset" name="yoff" type="number"/>
      </div>
   );
}

export default Generator;
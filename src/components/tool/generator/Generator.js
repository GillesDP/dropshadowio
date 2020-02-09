import React, { useState } from 'react';
import Dragger from './Dragger';
import Input from './Input';
import Slider from './Slider';
import Radio from './Radio';

function Generator(props) {

   // Offset
   const { offset } = props.data;
   function setOffset(obj) {
      props.changeData(prev => {
         return {...prev, offset: obj}
      });
   }

   // Blur
   const { blur } = props.data;
   function setBlur(num) {
      props.changeData(prev => {
         return {...prev, blur: num}
      });
   }

   // Spread
   const { spread } = props.data;
   function setSpread(num) {
      props.changeData(prev => {
         return {...prev, spread: num}
      });
   }

   // Outset
   const { outset } = props.data;
   function setOutset(boolean) {
      props.changeData(prev => {
         return {...prev, outset: boolean}
      });
   }

   return (
      <div className="container pt-5 random">
         <Dragger changeOffset={setOffset} offset={offset} />
         <Input label="x-offset" id="xOffset" name="xoff" type="number" value={offset.x} changeData={props.changeData}/>
         <Input label="y-offset" id="yOffset" name="yoff" type="number" value={offset.y} changeData={props.changeData}/>
         <Slider label="blur" id="blur" name="blur" changeValue={setBlur} value={blur} center={false} boundries={[0, 50]}/>
         <Slider label="spread" id="spread" name="spread" changeValue={setSpread} value={spread} center={true} boundries={[-25, 25]}/>
         <Radio options={["outset", "inset"]} value={outset} changeValue={setOutset}></Radio>
      </div>
   );
}

export default Generator;
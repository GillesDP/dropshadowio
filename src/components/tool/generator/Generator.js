import React, { useState } from 'react';
import './css/generator.scss';
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
      <div className="generator">
         <div className="generator-positioning">
            <small>positioning</small>
            <div className="generator-container">
               <Dragger changeOffset={setOffset} offset={offset} />

               <fieldset>
                  <legend>Offset</legend>
                  <Input label="x-offset" id="xOffset" name="xoff" type="number" value={offset.x} changeData={props.changeData}/>
                  <Input label="y-offset" id="yOffset" name="yoff" type="number" value={offset.y} changeData={props.changeData}/>
               </fieldset>
               
               <Slider label="blur" id="blur" name="blur" changeValue={setBlur} value={blur} center={false} boundries={[0, 50]}/>
               <Slider label="spread" id="spread" name="spread" changeValue={setSpread} value={spread} center={true} boundries={[-25, 25]}/>
            </div>
         </div>
         <div className="generator-colors">
            <small>colors</small>
            Color selectors
         </div>

         <div className="generator-radio">
            <Radio options={["outset", "inset"]} name="outset" default="outset" value={outset} changeValue={setOutset}></Radio>
         </div>
      </div>
   );
}

export default Generator;
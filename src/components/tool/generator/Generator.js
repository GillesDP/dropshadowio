import React from 'react';
import './css/generator.scss';
import Dragger from './Dragger';
import Input from './Input';
import Slider from './Slider';
import Radio from './Radio';
import ColorPicker from './ColorPicker';

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

   // Colors
   const { shadow } = props.data.colors;
   function setShadow(obj) {
      props.changeData(prev => {
         return {...prev, colors: {...prev.colors, shadow: obj}}
      });
   }
   const { box } = props.data.colors;
   function setBox(obj) {
      props.changeData(prev => {
         return {...prev, colors: {...prev.colors, box: obj}}
      });
   }
   const { background } = props.data.colors;
   function setBackground(obj) {
      props.changeData(prev => {
         return {...prev, colors: {...prev.colors, background: obj}}
      });
   }

   // Opacity
   const opacity = props.data.colors.opacity;
   function setOpacity(num) {
      props.changeData(prev => {
         return {
            ...prev,
            colors: {
               ...prev.colors,
               opacity: num
            }
         }
      });
   }

   return (
      <div className="generator">
         <div className="generator__positioning">
            <small>positioning</small>
            <div className="generator__container">

               <Dragger changeOffset={setOffset} offset={offset} active={props.active} changeActive={props.changeActive}/>
               <div className="d-block flex-grow-1">
                  <fieldset>
                     <legend>Offset</legend>
                     <Input label="x-offset" id="xOffset" name="xoff" type="number" value={offset.x} changeData={props.changeData}/>
                     <Input label="y-offset" id="yOffset" name="yoff" type="number" value={offset.y} changeData={props.changeData}/>
                  </fieldset>
                  
                  <Slider label="blur" id="blur" name="blur" changeValue={setBlur} value={blur} center={false} boundries={[0, 50]} active={props.active} changeActive={props.changeActive}/>
                  <Slider label="spread" id="spread" name="spread" changeValue={setSpread} value={spread} center={true} boundries={[-25, 25]} active={props.active} changeActive={props.changeActive} />
               </div>

            </div>
         </div>
         <div className="generator__colors">
            <small>colors</small>
            <div className="generator__container">
               <div className="generator__col">
                  <ColorPicker type="shadow" label="shadow" value={shadow} changeValue={setShadow}/>
                  <Slider label="opacity" id="opacity" name="opacity" changeValue={setOpacity} value={opacity} center={false} boundries={[0,1]} round={100} active={props.active} changeActive={props.changeActive} />
               </div>
               <div className="generator__col">
                  <ColorPicker type="background" label="background" value={background} changeValue={setBackground}/>
               </div>
               <div className="generator__col">
                  <ColorPicker type="box" label="box" value={box} changeValue={setBox}/>
               </div>
            </div>
         </div>

         <div className="generator__radio">
            <Radio options={["outset", "inset"]} name="outset" default="outset" value={outset} changeValue={setOutset}></Radio>
         </div>
      </div>
   );
}

export default Generator;
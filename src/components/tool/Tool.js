import React, {useState} from 'react';
import Generator from './generator/Generator';
import Debug from './Debug';
import ShadowPreview from './previews/ShadowPreview';
import ButtonPreview from './previews/ButtonPreview';
import NavbarPreview from './previews/NavbarPreview';

function Tool() {
   const [data, setData] = useState({
      offset: {x: 0, y: 12},
      blur: 24,
      spread: -12,
      outset: true,
      colors: {
         shadow: {hex: "#000000", rgb: {r: 0, g: 0, b: 0, a: 1}},
         box: {hex: "#391DD5", rgb: {r: 152, g: 35, b: 206, a: 1}},
         background: {hex: "#FFFFFF", rgb: {r: 255, g: 255, b: 255, a: 1}},
         opacity: .5
      }
   });

   function codeConverter() {
      let code = `
         ${data.outset ? "" : "inset"}
         ${data.offset.x}px 
         ${data.offset.y}px 
         ${data.blur}px 
         ${data.spread}px 
         rgba(${data.colors.shadow.rgb.r}, ${data.colors.shadow.rgb.g}, ${data.colors.shadow.rgb.b}, ${data.colors.opacity})
         `;
      return code;
   }

   return (
      <div className="container">
         <div className="row">
            <div className="col-lg-8">
               {/* Read & Change */}
               <Generator 
                  data={data}
                  changeData={(obj) => setData(obj)} 
               />
               <Debug
                  data={data}
               />
            </div>
            <div className="col-lg-4">
               {/* Read only */}
               <ShadowPreview data={data} getCode={codeConverter}/>
            </div>
         </div>
         <h1>In Use</h1>
         <div className="row">
            <div className="col-lg-4">
               <ButtonPreview data={data} getCode={codeConverter} icon invert={true}>Hit this button</ButtonPreview>
            </div>
            <div className="col-lg-8">
               <NavbarPreview data={data} getCode={codeConverter}></NavbarPreview>
            </div>
         </div>
         <div className="row">
            <div className="col-lg-8">

            </div>
            <div className="col-lg-4">
               <ButtonPreview data={data} getCode={codeConverter}>Cool right</ButtonPreview>
            </div>
         </div>
      </div>
   );
}

export default Tool;
import React, {useState} from 'react';
import Generator from './generator/Generator';
import ShadowPreview from './previews/ShadowPreview';
import ButtonPreview from './previews/ButtonPreview';
import NavbarPreview from './previews/NavbarPreview';
import PostPreview from './previews/PostPreview';
import CodeBlock from '../global/CodeBlock';
import './tool.scss';

function Tool() {
   const [data, setData] = useState({
      offset: {x: 0, y: 12},
      blur: 24,
      spread: -12,
      outset: true,
      colors: {
         shadow: {hex: "#000000", rgb: {r: 0, g: 0, b: 0, a: 1}},
         box: {hex: "#391DD5", rgb: {r: 57, g: 29, b: 213, a: 1}},
         background: {hex: "#FFFFFF", rgb: {r: 255, g: 255, b: 255, a: 1}},
         opacity: .5
      },
      getCode: function() {
         let code = `${this.outset ? "" : "inset"} ${this.offset.x}px ${this.offset.y}px ${this.blur}px ${this.spread}px rgba(${this.colors.shadow.rgb.r}, ${this.colors.shadow.rgb.g}, ${this.colors.shadow.rgb.b}, ${this.colors.opacity})`;
         return code
      }
   });

   return (
      <div className="tool">
         <div className="tool__main">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8">
                     {/* Read & Change */}
                     <Generator 
                        data={data}
                        changeData={(obj) => setData(obj)} 
                     />
                  </div>
                  <div className="col-lg-4">
                     {/* Read only */}
                     <ShadowPreview data={data}/>
                     <CodeBlock language="css" title="css" theme="dark" copy="true">
                        <span className="css-property">box-shadow</span>
                        <span className="css-value">: {data.getCode()};</span><br/>
                        <span className="css-property">-webkit-box-shadow</span>
                        <span className="css-value">: {data.getCode()};</span>
                     </CodeBlock>
                  </div>
               </div>
            </div>
         </div>
         <div className="tool__use">
            <div className="container">
               <div className="row">
                  <div className="col-lg-8"><h1>In Use</h1></div>
               </div>
               <div className="row">
                  <div className="col-lg-4">
                     <ButtonPreview data={data} icon invert={true}>Hit this button</ButtonPreview>
                  </div>
                  <div className="col-lg-8">
                     <NavbarPreview data={data}/>
                  </div>
               </div>
               <div className="row">
                  <div className="col-lg-8">
                     <PostPreview data={data}/>
                  </div>
                  <div className="col-lg-4">
                     <ButtonPreview data={data}>Cool right</ButtonPreview>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Tool;
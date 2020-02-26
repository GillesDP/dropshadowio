import React from 'react';
import './css/shadowPreview.scss';

function ShadowPreview(props) {
   let colors = props.data.colors;

   const styles = {
      background: colors.box.hex,
      boxShadow: props.data.getCode()
   }

   return (
      <div className="preview" style={{background: colors.background.hex}}>
         <div className="preview--shadow">
            <div className="preview--shadow__box" style={styles}></div>
         </div>
      </div>
   )
}

export default ShadowPreview;
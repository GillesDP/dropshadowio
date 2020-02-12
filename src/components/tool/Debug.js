import React from 'react';

function Debug(props) {
   return (
      <div style={{color: "black"}}>
         <p>
            X: {props.data.offset.x} Y: {props.data.offset.y} <br/>
            Blur: {props.data.blur} <br/>
            Spread: {props.data.spread} <br/>
            Outset: {props.data.outset.toString()}
         </p>
      </div>
   );
}

export default Debug;
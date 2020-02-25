import React from 'react';
import styles from './Debug.module.scss';

function Debug(props) {
   return (
      <div className={styles.debug}>
         <div className={styles.settings}>
            Blur: {props.data.blur} <br/>
            Spread: {props.data.spread} <br/>
            Outset: {props.data.outset.toString()}
         </div>
         <div className={styles.coords}>
            X: {props.data.offset.x} <br/>
            Y: {props.data.offset.y}
         </div>
         <div className={styles.colors}>
            <ul>
               <li>Shadow: {props.data.colors.shadow.hex} - Opacity: {props.data.colors.opacity}</li>
               <li>Box: {props.data.colors.box.hex}</li>
               <li>Background: {props.data.colors.background.hex}</li>
            </ul>
         </div>
      </div>
   );
}

export default Debug;
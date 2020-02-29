import React, {useState} from 'react';
import './css/subscribe.css';

function Subscribe() {
   const [fieldValue, setFieldValue] = useState("");

   return (
      <form className="subscribe">
         <input type="email" placeholder="Email" value={fieldValue} onChange={e => setFieldValue(e.target.value)}/>
         <button type="submit" onClick={e => e.preventDefault()}>GO</button>
      </form>
   );
}

export default Subscribe;
import React from 'react';
import './css/subscribe.css';

function Subscribe() {
   return (
      <form className="subscribe">
         <input type="email" placeholder="email"/>
         <button>GO</button>
      </form>
   );
}

export default Subscribe;
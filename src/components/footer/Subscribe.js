import React from 'react';
import './css/subscribe.css';

function Subscribe() {
   return (
      <form className="subscribe">
         <input type="email" placeholder="Email"/>
         <button>GO</button>
      </form>
   );
}

export default Subscribe;
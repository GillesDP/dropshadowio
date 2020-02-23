import React from 'react';
import './css/credits.scss';

const year = new Date().getFullYear();

function Credits() {
   return (
      <div className="row credits">
         <div className="col d-md-flex">
            <h2>dropshadow.io</h2>
            <i>&copy; {year} Dropshadow.io</i>
            <i className="ml-auto d-none d-md-inline-block">A tool by <a href="https://gilles.design/">Gilles De Praetere</a></i>
         </div>
      </div>
   );
}

export default Credits;
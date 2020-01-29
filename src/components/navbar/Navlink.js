import React from 'react';
import './navlink.css';

function Navlink(props) {
   return (
      <li className="nav-item">
         <a className="nav-link" href={props.link}>
            {props.content}
            <span className="arrow d-inline-block d-lg-none">&rarr;</span>
         </a>
      </li>
   );
}

export default Navlink;
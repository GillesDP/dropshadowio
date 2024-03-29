import React from 'react';
import { Link } from 'react-router-dom';
import './css/navlink.scss';

function Navlink(props) {

   return (
      <li className="nav-item">
         <Link className={`nav-link${props.disabled ? " nav-link--disabled" : ""}`} to={props.link} onClick={props.disabled ? e => e.preventDefault() : null}>
            {props.content}
            {props.content.toLowerCase() === "presets" ? <span className="superscript">SOON</span> : null}
            <span className="arrow d-inline-block d-lg-none">&rarr;</span>
         </Link>
      </li>
   );
}

export default Navlink;
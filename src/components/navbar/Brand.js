import React from 'react';
import { Link } from 'react-router-dom';
import './css/brand.scss';

function Brand() {
   return (
      <Link className="navbar-brand" to="/"><img src="./images/DropshadowIoLogo.svg" alt="Dropshadow.io logo"/> dropshadow.io</Link>
   );
}

export default Brand;
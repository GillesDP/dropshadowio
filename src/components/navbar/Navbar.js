import React from 'react';
import Navlink from './Navlink';
import Brand from './Brand';
import './css/navbar.css';

const pages = [
   {
      href: "#",
      content: "Presets"
   },
   {
      href: "#",
      content: "How to use"
   }
]

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg">
         <div className="container">
            <Brand />

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarMenu" aria-controls="navbarMenu" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon">MENU</span>
            </button>

            <div className="collapse navbar-collapse" id="navbarMenu">
               <ul className="navbar-nav ml-auto">
                  {pages.map(c => {
                    return <Navlink link={c.href} content={c.content}/> 
                  })}
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
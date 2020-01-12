import React from "react";
import styles from "./Navbar.module.scss";

function Navbar() {
   return (
      <nav className="navbar navbar-expand-lg">
         <div className="container">
            <a className="navbar-brand" href="#">dropshadow.io</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">MENU</button>

            <div className="collapse navbar-collapse" id="navbarNav">
               <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                     <a className="nav-link" href="#">PRESETS<span className="index">SOON</span> <span className="d-sm-none arrow">&rarr;</span></a>
                  </li>
                  <li className="nav-item">
                     <a className="nav-link" href="#">HOW TO USE <span className="d-sm-none arrow">&rarr;</span></a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;

import React from 'react';
import Credits from './Credits';
import Subscribe from './Subscribe';
import './css/footer.css';

function Footer() {
   return (
      <footer>
         <div className="container">
            <div className="row">
               <div className="col order-2 order-md-1">
                  <ul>
                     <li>Sitemap</li>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">Presets</a></li>
                     <li><a href="#">How To Use</a></li>
                  </ul>
               </div>
               <div className="col d-none d-md-block order-md-2">
                  <ul>
                     <li>Legal</li>
                     <li><a href="#">Privacy Policy</a></li>
                     <li><a href="#">Terms Of Use</a></li>
                  </ul>
               </div>
               <div className="col order-3">
                  <ul>
                     <li>Social</li>
                     <li><a href="#">Github</a></li>
                     <li><a href="#">Twitter</a></li>
                  </ul>
               </div>
               <div className="col-lg-4 order-1 order-md-4">
                  <ul>
                     <li>Subscribe To Our Newsletter</li>
                     <li>
                        <Subscribe />
                     </li>
                  </ul>
               </div>
            </div>

            <Credits/>
         </div>
      </footer>
   );
}

export default Footer;
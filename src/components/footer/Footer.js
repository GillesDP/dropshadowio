import React from 'react';
import Credits from './Credits';
import Subscribe from './Subscribe';
import { Link } from 'react-router-dom';
import './css/footer.scss';

function Footer() {
   return (
      <footer>
         <div className="container">
            <div className="row">
               <div className="col order-2 order-md-1">
                  <ul>
                     <li>Sitemap</li>
                     <li><Link to="/">Home</Link></li>
                     <li><Link to="/presets">Presets</Link></li>
                     <li><Link to="/how-to-use">How To Use</Link></li>
                  </ul>
               </div>
               <div className="col d-none d-md-block order-md-2">
                  <ul>
                     <li>Legal</li>
                     <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                     <li><Link to="/terms-of-use">Terms Of Use</Link></li>
                  </ul>
               </div>
               <div className="col order-3">
                  <ul>
                     <li>Social</li>
                     <li><a href="https://github.com/GillesDP" target="_blank" rel="noopener noreferrer">Github</a></li>
                     <li><a href="https://twitter.com/GewoonGilles" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                  </ul>
               </div>
               <div className="col-lg-4 order-1 order-md-4">
                  <ul>
                     <li>Subscribe To My Newsletter</li>
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
import React from 'react';
import { Link } from 'react-router-dom';
import SetMeta from './SetMeta';
import '../components/global/css/fourOFour.scss';

function FourOFour() {
   return (
      <div className="four-o-four">
         <SetMeta>
            <title>Dropshadow.io - 404</title>
            <meta name="description" content="404! Seems like you're on the wrong page. Please get back to our site!"/>
         </SetMeta>
         <div className="four-o-four__content">
            <small>Seems Like...</small>
            <h1>You're in the wrong place</h1>
            <div className="four-o-four__content__number">
               <h2>404</h2>
            </div>

            <Link to="/">
               <button className="button button--blue">
                  Back to site
               </button>
            </Link>
         </div>

         <div className="four-o-four__links">
            <Link to="/">Home</Link> / <Link to="/how-to-use">How To Use</Link> / <Link to="/privacy-policy">Privacy Policy</Link>
         </div>
         <div className="four-o-four__footer">
            <p>dropshadow.io</p>
         </div>
      </div>
   );
}

export default FourOFour;
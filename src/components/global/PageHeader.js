import React from 'react';
import './css/pageHeader.scss';

function PageHeader(props) {
   return (
      <div className="page-header">
         <div className="container">
            <div className="row">
               <div className="col">
                  <div className="page-header__category">{props.category}</div>
                  <div className={`page-header__title${props.dots ? " page-header--dots" : ""}`}><h1>{props.children}</h1></div>
                  {props.pageUpdate ? 
                     <div className="page-header__updated">Last Updated <span className="page-header__date">{props.pageUpdate}</span></div>
                  : null}
               </div>
            </div>
         </div>
      </div>
   );
}

/*
PROPS:
   - category: string (required)
   - pageUpdate: string of date (optional)
   - dots: boolean (optional)
*/

export default PageHeader;
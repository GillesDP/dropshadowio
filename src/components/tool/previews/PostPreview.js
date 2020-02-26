import React from 'react';
import './css/postPreview.scss';

function PostPreview(props) {
   let colors = props.data.colors
   const postStyle = {
      boxShadow: props.data.getCode()
   }

   return (
      <div className="preview" style={{margin: ".5em 0"}}>
         <div className="preview--post">
            <div className="preview--post__container" style={postStyle}>
               <div className="preview--post__image">
               </div>
               <div className="preview--post__details">
                  <div className="preview--post__text">
                     <h1>Picture of trees</h1>
                     <p>Posted just now</p>
                  </div>
                  <div className="preview--post__icon">
                     <svg xmlns="http://www.w3.org/2000/svg" width="20.767" height="18.674" viewBox="0 0 20.767 18.674">
                        <path id="heart" d="M16.932,33.09a5.012,5.012,0,0,0-6.839.5l-.722.744-.722-.744a5.012,5.012,0,0,0-6.839-.5,5.263,5.263,0,0,0-.363,7.62C9,48.5,9.341,48.583,9.352,48.584l7.939-7.875A5.259,5.259,0,0,0,16.932,33.09Z" transform="translate(1.013 -30.964)" fill={`rgba(${colors.box.rgb.r}, ${colors.box.rgb.g}, ${colors.box.rgb.b}, .25)`} stroke={colors.box.hex} strokeWidth="2"/>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PostPreview;
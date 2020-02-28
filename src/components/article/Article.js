import React from 'react';

function Article(props) {
   const style = {
      display: "block"
   }

   return (
      <article className={`article${props.background === "gray" ? " article--gray" : ""}`} style={props.selected ? style : {}}>
         <div className="article__title"><h1>{props.title}</h1></div>
         <div className="article__index">0{props.index}</div>
         <div className="article__content">
            {props.children}
         </div>
      </article>
   );
}

/* 
PROPS:
   - title: string
   - index: number
   - background: string (optional)
   - selecteed: boolean
*/

export default Article;
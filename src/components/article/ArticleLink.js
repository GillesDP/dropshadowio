import React from 'react';

function ArticleNav(props) {
   return (
      <button className={`article-nav__link${props.selected ? " article-nav__link--active" : ""}`} onClick={props.changeSelected} value={props.title}>
         {props.index <= 9 ? `0${props.index}` : props.index}. {props.title}
      </button>
   );
}

/*
PROPS:
   - title: string (refers to article title)
   - index: number
   - selected: boolean
*/

export default ArticleNav;
import React, {useState} from 'react';
import ArticleLink from './ArticleLink';
import './css/article.scss';
import Article from './Article';

function ArticleController(props) {
   const [selected, setSelected] = useState(props.default);

   function changeSelected(e) {
      setSelected(e.target.value);
   }

   return (
      <div className="article-controller">
         <div className="article-controller__nav">
            {props.articles.map((c, i) => {
               return (
                  <ArticleLink 
                     title={Object.values(c)[0]} 
                     index={i+1} 
                     key={Object.values(c)[2]} 
                     changeSelected={changeSelected} 
                     selected={selected === Object.values(c)[0] ? true : false} />
               );
            })}
         </div>
         <div className="article-controller__article">
            {props.articles.map((c, i) => {
               return (
                  <Article 
                     index={i+1} 
                     title={Object.values(c)[0]} 
                     key={Object.values(c)[2]}
                     selected={selected === Object.values(c)[0] ? true : false}
                     background={props.background}
                     >
                     {Object.values(c)[1]}
                  </Article>
               );
            })}
         </div>
      </div>
   );
}

/*
PROPS:
   - articles: arr
   - default: string (default selected article)
   - background: string (pass through <Article>)
*/

export default ArticleController;
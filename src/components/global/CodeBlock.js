import React, {useState} from 'react';
import './css/codeBlock.scss';

function CodeBlock(props) {
   const [copySuccess, setCopySuccess] = useState(false)
   const codeRef = React.createRef();

   function copyToClipboard(e) {
      const node = codeRef.current;

      if (document.body.createTextRange) {
         const range = document.body.createTextRange();
         range.moveToElementText(node);
         range.select();
      } else if (window.getSelection) {
         const selection = window.getSelection();
         const range = document.createRange();
         range.selectNodeContents(node);
         selection.removeAllRanges();
         selection.addRange(range);
      } else {
         console.warn("Could not copy: Unsupported browser.");
      }
      document.execCommand('copy');
      setCopySuccess(true);
      setTimeout(() => {setCopySuccess(false)}, 2000);
   }

   return (
      <div className={`code-block${props.theme === "dark" ? " code-block--dark" : props.theme === "white" ? " code-block--white" : ""}`}>
         <div className="code-block__title">
            {props.title}
         </div>
         <div ref={codeRef} className="code-block__code">
            <pre>
               <code className={"language-"+ props.language}>
                  {props.children}
               </code>
            </pre>
         </div>
         {props.copy ? 
            <div className="code-block__copy">
               <button onClick={copyToClipboard}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14">
                     <g id="Copy_icon" data-name="Copy icon" transform="translate(-1330 -764)">
                        <path id="Subtraction_1" data-name="Subtraction 1" d="M10,14.323H0v-12H6.452L10,5.83v8.493Z" transform="translate(1330 763.677)" fill="#fff"/>
                        <path id="Subtraction_2" data-name="Subtraction 2" d="M10,14.323H0v-12H6.452L10,5.83v8.493Z" transform="translate(1332 761.677)" fill="#fff" opacity="0.2"/>
                     </g>
                  </svg>
                  {copySuccess ? "copied" : "copy"}
               </button>
            </div> 
         : null}
      </div>
   );
}

/*
PROPS:
   - title: string
   - theme: string
   - language: string (html/css)
   - copy: boolean (active copy button)
*/

export default CodeBlock;
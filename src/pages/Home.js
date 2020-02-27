import React from "react";
import Tool from "../components/tool/Tool";
import Share from "../components/global/Share";
import CodeBlock from "../components/global/CodeBlock";
import Section from "../components/global/Section";

function Home() {
   return (
      <React.Fragment>
         <Tool/>
         <div className="container" style={{paddingBottom: "6em"}}>
            <Share/>
         </div>
         <hr/>

         <Section title="How To Use">
            <p>Using gradients in css is very simple and only requires a few lines of code. You can use both inline or external css to apply the styles. The prefix -webkit- is added in order to support older browsers.</p>
            <p style={{marginBottom: "2em"}}>
               <b>Note:</b> This is a demo, please use your own shadow by clicking the copy button.<br/>
            </p>
            <div className="row">
               <div className="col-lg-6" style={{marginBottom: "1em"}}>
                  <CodeBlock title="html">
                     <span className="html-tag">&lt;div id="<span className="html-id">demo</span>"&gt;</span><br/>
                     <span className="tab">Hello World</span><br/>
                     <span className="html-tag">&lt;/div&gt;</span>
                  </CodeBlock>
               </div>
               <div className="col-lg-6">
                  <CodeBlock title="css">
                     <span className="css-selector">#demo</span> &#123;<br/>
                     <span className="css-property tab">box-shadow: </span> 
                     <span className="css-value">12px 20px 25px 0px rgba(0,0,0,0.2);</span><br/>
                     <span className="css-property tab">-webkit-box-shadow: </span> 
                     <span className="css-value">12px 20px 25px 0px rgba(0,0,0,0.2);</span><br/>
                     &#125;
                  </CodeBlock>
               </div>
            </div>
         </Section>

         <Section className="about" title="About Dropshadow.io">
            <div className="row">
               <div className="col-lg-6">
                  <h2>History</h2>
                  <p>It all started on the most ordinary day at the most usual time. For some reason, I needed a way to generate drop shadows quickly. After Googling for a while I could not find any great tool that wasn’t based on regular sliders or had poor design choices. That’s when I decided to create something fresh, with user usability in mind.</p>
                  <h2>The goal</h2>
                  <p>The goal has been clear since the very beginning; Offering front-end developers and designers a user-friendly and attractive tool to create their drop shadows.</p>
               </div>
            </div>
         </Section>
      </React.Fragment>
   );
}

export default Home;
import React from "react";
import PageHeader from "../components/global/PageHeader";
import Section from "../components/global/Section";
import ArticleController from "../components/article/ArticleController";
import CodeBlock from "../components/global/CodeBlock";
import Button from "../components/global/Button";

function HowToUse() {
   // Web
   const webArticles = [
      {
         title: "html",
         content: 
            <React.Fragment>
               <p>You will probably already have a file containing the html for your new site. Search for the element you want to give a box shadow. Then add a <b>class</b> or <b>id</b> to it. <br/><br/> Ids are unique and can only be used once per page. Classes can be added to each element, they all will have the same style. In this example we are going to use an id.</p>
               <CodeBlock language="html">
                  <span className="html-tag">&lt;div id="<span className="html-id">demo</span>"&gt;</span><br/>
                  <span className="tab">Hello World</span><br/>
                  <span className="html-tag">&lt;/div&gt;</span>
               </CodeBlock>
            </React.Fragment>,
         key: 101
      },
      {
         title: "syntax",
         content:
            <React.Fragment>
               <p>You will probably already have a file containing the html for your new site. Search for the element you want to give a box shadow. Then add a <b>class</b> or <b>id</b> to it. <br/><br/> Ids are unique and can only be used once per page. Classes can be added to each element, they all will have the same style. In this example we are going to use an id.</p>
               <CodeBlock language="html">
                  <span className="html-tag">&lt;div id="<span className="html-id">demo</span>"&gt;</span><br/>
                  <span className="tab">Hello World</span><br/>
                  <span className="html-tag">&lt;/div&gt;</span>
               </CodeBlock>
            </React.Fragment>,
         key: 102
      },
      {
         title: "Adding CSS",
         content: 
            <React.Fragment>
               <p>You will probably already have a file containing the html for your new site. Search for the element you want to give a box shadow. Then add a <b>class</b> or <b>id</b> to it. <br/><br/> Ids are unique and can only be used once per page. Classes can be added to each element, they all will have the same style. In this example we are going to use an id.</p>
               <CodeBlock language="html">
                  <span className="html-tag">&lt;div id="<span className="html-id">demo</span>"&gt;</span><br/>
                  <span className="tab">Hello World</span><br/>
                  <span className="html-tag">&lt;/div&gt;</span>
               </CodeBlock>
            </React.Fragment>,
         key: 103
      },
      {
         title: "The Result",
         content: 
            <React.Fragment>
               <p>You will probably already have a file containing the html for your new site. Search for the element you want to give a box shadow. Then add a <b>class</b> or <b>id</b> to it. <br/><br/> Ids are unique and can only be used once per page. Classes can be added to each element, they all will have the same style. In this example we are going to use an id.</p>
               <CodeBlock language="html">
                  <span className="html-tag">&lt;div id="<span className="html-id">demo</span>"&gt;</span><br/>
                  <span className="tab">Hello World</span><br/>
                  <span className="html-tag">&lt;/div&gt;</span>
               </CodeBlock>
            </React.Fragment>,
         key: 104
      }
   ]

   // Wireframe software
   const softwareArticles = [
      {
         title: "Creating a box",
         content: 
            <React.Fragment>
               <p>Open up your favorite wireframe software and use the shape tool to create a box. You can give it any background or color you like.</p>
            </React.Fragment>,
         key: 201
      },
      {
         title: "Adding a drop shadow",
         content: 
            <React.Fragment>
               <p>Open up your favorite wireframe software and use the shape tool to create a box. You can give it any background or color you like.</p>
            </React.Fragment>,
         key: 202
      },
      {
         title: "Improving the effect",
         content: 
            <React.Fragment>
               <p>Open up your favorite wireframe software and use the shape tool to create a box. You can give it any background or color you like.</p>
            </React.Fragment>,
         key: 203
      },
      {
         title: "The Result",
         content: 
            <React.Fragment>
               <p>Open up your favorite wireframe software and use the shape tool to create a box. You can give it any background or color you like.</p>
            </React.Fragment>,
         key: 204
      }
   ]

   return(
      <React.Fragment>
         <PageHeader category="how to use" dots>Upgrade your workflow</PageHeader>
         <Section title="Html & Css" subtitle="On web" background="gray">
            <p>
               Drop shadows are hot these days. You can’t think them away and they are crucial to any website in order to create depth.
               <br/><br/>
               In CSS, drop shadows are referred to box shadows. Adding a box shadow to an element is simple.
            </p>

            <ArticleController articles={webArticles} default="html"/>
         </Section>

         <Section title="Wireframe Software" subtitle="Design">
            <p>
               As easy as it seems for web, it’s not that simple for software such as Sketch, Invision, Adobe Experience Design or Figma. Creating a drop shadow that does well can be very hard at first, but when you get the grip of it, it’s perfectly do-able.
               <br/><br/>
               Credits to <a href="https://www.invisionapp.com/inside-design/how-to-make-the-perfect-diffused-drop-shadow/" target="_blank" rel="noopener noreferrer">Joseph Angelo Todaro</a> for this amazing trick.
            </p>

            <ArticleController articles={softwareArticles} default="Creating a box" background="gray"/>
         </Section>

         <Section className="contact-cta" title="Great things come together" subtitle="Help me improve this tool" verticalCenter>
            <Button theme="blue">message me</Button>
            <Button theme="border">github</Button>
         </Section>
      </React.Fragment>
   );
}

export default HowToUse;
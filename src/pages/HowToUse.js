import React from "react";
import ReactGA from "react-ga";
import PageHeader from "../components/global/PageHeader";
import Section from "../components/global/Section";
import ArticleController from "../components/article/ArticleController";
import CodeBlock from "../components/global/CodeBlock";
import Button from "../components/global/Button";

function HowToUse() {
   ReactGA.pageview(window.location.pathname);
   React.useEffect(() => {
      document.title = "Dropshadow.io | How To Use";
   }, []);

   // Web
   const webArticles = [
      {
         title: "html",
         content: 
            <React.Fragment>
               <p>You will probably already have a file containing the html for your new site. Search for the element you want to give a box shadow. Then add a <b>class</b> or <b>id</b> to it.</p>
               <p>Ids are unique and can only be used once per page. Classes can be added to each element, they all will have the same style. In this example we are going to use an id.</p>
               <CodeBlock language="html">
                  <span className="html-tag">&lt;div id="<span className="html-id">demo</span>"&gt;</span><br/>
                  <span className="tab">Hello World</span><br/>
                  <span className="html-tag">&lt;/div&gt;</span>
               </CodeBlock>
            </React.Fragment>,
         key: 101,
         default: true
      },
      {
         title: "syntax",
         content:
            <React.Fragment>
               <p>There are a few ways to define box-shadows in css. The most common you'll see on the web is the "one-line" code.</p>
               <CodeBlock>
                  <span className="css-property">box-shadow:</span> initial|inherit|inset x-offset y-offset blur spread color;
               </CodeBlock>
               <p>
                  <b>Blur</b>, <b>spread</b> and <b>color</b> are optional values, while <b>x-offset</b> and <b>y-offset</b> are required. By default a box shadow will also have the <b>initial</b> property attached to it.
               </p>
            </React.Fragment>,
         key: 102,
         default: false
      },
      {
         title: "Adding CSS",
         content: 
            <React.Fragment>
               <p>Adding the generated CSS to your code is very simple. Search for the <b>class</b> or <b>id</b> you created earlier, use the CSS selector to select the element. For id's we use <code>#</code>, for classes a simple <code>.</code> does the job.</p>
               <CodeBlock language="css">
                  <span className="css-selector">#demo</span> &#123;<br/>
                  <span className="css-property tab">box-shadow: </span> 
                  <span className="css-value">0px 18px 18px -12px rgba(0,0,0,0.3);</span><br/>
                  <span className="css-property tab">-webkit-box-shadow: </span> 
                  <span className="css-value">0px 18px 18px -12px rgba(0,0,0,0.3);</span><br/>
                  &#125;
               </CodeBlock>
               <p>Now comes the fun part. Play around with the css values!</p>
            </React.Fragment>,
         key: 103,
         default: false
      },
      {
         title: "The Result",
         content: 
            <React.Fragment>
               <p>The moment of thruth, if you followed the steps you should now have the perfect dropshadow! Below is a quick overview of the code.</p>
               <CodeBlock language="html">
                  <span className="html-tag">&lt;div id="<span className="html-id">demo</span>"&gt;</span><br/>
                  <span className="tab">Hello World</span><br/>
                  <span className="html-tag">&lt;/div&gt;</span>
               </CodeBlock>
               <CodeBlock language="css">
                  <span className="css-selector">#demo</span> &#123;<br/>
                  <span className="css-property tab">box-shadow: </span> 
                  <span className="css-value">0px 18px 18px -12px rgba(0,0,0,0.3);</span><br/>
                  <span className="css-property tab">-webkit-box-shadow: </span> 
                  <span className="css-value">0px 18px 18px -12px rgba(0,0,0,0.3);</span><br/>
                  &#125;
               </CodeBlock>
               <CodeBlock language="output">
                  <div style={{margin: "3em auto", color: "white", display: "flex", justifyContent: "center", alignItems: "center", fontWeight: "600", fontSize: "1rem", background: "#1DD59C", width: "50%", height: "5em", boxShadow: "0px 18px 18px -12px rgba(0,0,0,0.3)"}}>Hello World!</div>
               </CodeBlock>
            </React.Fragment>,
         key: 104,
         default: false
      }
   ]

   // Wireframe software
   const softwareArticles = [
      {
         title: "Creating a box",
         content: 
            <React.Fragment>
               <p>Open up your favorite wireframe software and use the shape tool to create a box. You can give it any background or color you like.</p>
               <img src="./images/CreateBox.svg" alt="Creating a box using the square tool"/>
            </React.Fragment>,
         key: 201,
         default: true
      },
      {
         title: "Adding a drop shadow",
         content: 
            <React.Fragment>
               <p>Most wireframe tools have the functionality to add a shadow built-in. Select the box you've created, and look for the "shadow" keyword in the edit panel.</p>
               <img src="./images/AddShadow.svg" alt="Adding a shadow to a block"/>
               <p>The inputs are structured the following way; First we have the x-offset, also known as the horizontal offset. Second we specify the vertical offset or y-offset. Next up there's the blur. Not all wireframe tools have the ability to set the spread. That's what brings us to the next part. Read on!</p>
            </React.Fragment>,
         key: 202,
         default: false
      },
      {
         title: "Improving the effect",
         content: 
            <React.Fragment>
               <p>The <b>spread</b> property basically takes the width and height of your element and scales it up or down. Since most design tools do not support the spread property, we need to find a way to work around it.</p>
               <p>The technique is really simple. Start off by duplicating the old box and removing the shadow or create a new box. Be sure that the dimensions are the same as the old one.</p>
               <img src="./images/ImproveShadow1.svg" alt="Create a new box"/>
               <p>Position the newly created box so it covers the old one. Then extend the sides as shown below.</p>
               <img src="./images/ImproveShadow2.svg" alt="Position the new box accordingly"/>
            </React.Fragment>,
         key: 203,
         default: false
      },
      {
         title: "The Result",
         content: 
            <React.Fragment>
               <p>There it is! You're a master now.</p>
               <img src="./images/ShadowResult.svg" alt="Amazing drop shadow result"/>
            </React.Fragment>,
         key: 204,
         default: false
      }
   ]

   return(
      <React.Fragment>
         <PageHeader category="how to use" dots>Upgrade your workflow</PageHeader>
         <Section title="Html & Css" subtitle="On web" background="gray">
            <p>Drop shadows are hot these days. You can’t think them away and they are crucial to any website in order to create depth.</p>
            <p>In CSS, drop shadows are referred to box shadows. Adding a box shadow to an element is simple.</p>

            <ArticleController articles={webArticles} default="html"/>
         </Section>

         <Section title="Wireframe Software" subtitle="Design">
            <p>As easy as it seems for web, it’s not that simple for software such as Sketch, Invision, Adobe Experience Design or Figma. Creating a drop shadow that does well can be very hard at first, but when you get the grip of it, it’s perfectly do-able.</p>
            <p>
               Credits to <a href="https://www.invisionapp.com/inside-design/how-to-make-the-perfect-diffused-drop-shadow/" target="_blank" rel="noopener noreferrer">Joseph Angelo Todaro</a> for this amazing trick.
            </p>

            <ArticleController articles={softwareArticles} default="Creating a box" background="gray"/>
         </Section>

         <Section className="contact-cta" title="Great things come together" subtitle="Help me improve this tool" verticalCenter>
            <Button theme="blue"><a href="mailto: hello@dropshadow.io">message me</a></Button>
            <Button theme="border"><a href="https://github.com/GillesDP" target="_blank" rel="noopener noreferrer">github</a></Button>
         </Section>
      </React.Fragment>
   );
}

export default HowToUse;
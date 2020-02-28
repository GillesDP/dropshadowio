import React from "react";
import Collapsible from "../components/global/Collapsible";
import Section from "../components/global/Section";
import PageHeader from "../components/global/PageHeader";

function PrivacyPolicy() {
   React.useEffect(() => {
      document.title = "Dropshadow.io | Privacy Policy";
   }, []);

   return (
      <React.Fragment>
         <PageHeader category="legal" pageUpdate="27th February 2020">Privacy Policy</PageHeader>
         <Section className="privacy-policy" background="gray">
            <div className="row">
               <div className="col-lg-8">
                  <p style={{marginBottom: "2em"}}>Your privacy is important to us. It is Dropshadow.io’s policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate. We only ask for personal information when we truly need it to provide a service to you.</p>
                  <p>We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used. We don’t share any personally identifying information publicly or with third-parties, except when required to by law.</p>
                  <Collapsible heading="What data do we collect?">
                     <div className="collapsible__text">
                        <p>Dropshadow.io collects the data listed below:</p>
                           <ul>
                              <li>Personal identification information (Name, email address, etc.)</li>
                              <li>Geographical location (Physical Address, City, Country)</li>
                              <li>Social media accounts</li>
                           </ul>
                        <p>We do not save login credentials of social media accounts.</p>
                     </div>
                  </Collapsible>
                  <Collapsible heading="How do we collect your data?">
                     <div className="collapsible__text">
                        <p>We collect and process data when you:</p>
                           <ul>
                              <li>Voluntarily complete a customer survey or provide feedback on any of our message boards or via email</li>
                              <li>Use or view our website, via your browser’s cookies</li>
                              <li>Social media accounts</li>
                           </ul>
                        <p>We may also receive your data indirectly via social media posts tagging or sharing Dropshadow.io related posts.</p>
                     </div>
                  </Collapsible>
                  <Collapsible heading="How will we use your data?">
                     <div className="collapsible__text">
                        <p>Dropshadow.io collects your data in order to better troubleshoot the site. We may also email or message you with special offers on other products and services we think you might like.</p>
                     </div>
                  </Collapsible>
                  <Collapsible heading="How do you store your data?">
                     <div className="collapsible__text">
                        <p>All data that's collected such as your email address, name, location are saved on a private database. These can be changed, hidden or removed without notice, but will never be sold to third parties.</p>
                     </div>
                  </Collapsible>
                  <Collapsible heading="What are my data protection rights?">
                     <div className="collapsible__text">
                        <p>Dropshadow.io would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
                        <ul>
                           <li><span className="collapsible__underline">The right to access</span> – You have the right to request Dropshadow.io for copies of your personal data. We may charge you a small fee for this service.</li>
                           <li><span className="collapsible__underline">The right to rectification</span> – You have the right to request that Dropshadow.io correct any information you believe is inaccurate. You also have the right to request Dropshadow.io to complete the information you believe is incomplete.</li>
                           <li><span className="collapsible__underline">The right to erasure</span> – You have the right to request that Dropshadow.io erases your personal data, under certain conditions.</li>
                           <li><span className="collapsible__underline">The right to restrict processing</span> – You have the right to request that Dropshadow.io restrict the processing of your personal data, under certain conditions.</li>
                           <li><span className="collapsible__underline">The right to object to processing</span> – You have the right to object to Dropshadow.io’s processing of your personal data, under certain conditions.</li>
                           <li><span className="collapsible__underline">The right to data portability</span> – You have the right to request that Dropshadow.io transfer the data that we have collected to another organization, or directly to you, under certain conditions.</li>
                        </ul>
                     </div>
                  </Collapsible>
                  <Collapsible heading="Do we use cookies?">
                     <div className="collapsible__text">
                        <p>Cookies are text files placed on your computer to collect standard Internet log information and visitor behaviour information. When you visit our websites, we may collect information from you automatically through cookies or similar technology. Dropshadow.io uses cookies in a range of ways to improve your experience on our website. See how we improve your experience below.</p>
                        <ul>
                           <li>Understanding how you use our website</li>
                           <li>Assuring proper functionality of the site</li>
                        </ul>
                        <p>There are a number of different types of cookies, however, our website uses functionality cookies. We use these cookies so that we recognize you on our website and remember your previously selected preferences. These could include what language you prefer and location you are in. A mix of first-party and third-party cookies are used</p><br/>
                        <p>You can set your browser not to accept cookies, and the above website tells you how to remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.</p>
                     </div>
                  </Collapsible>
               </div>
            </div>
         </Section>
      </React.Fragment>
   );
}

export default PrivacyPolicy;
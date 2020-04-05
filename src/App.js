import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import HowToUse from './pages/HowToUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FourOFour from './pages/FourOFour';
import SetMeta from './pages/SetMeta';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import ScrollToTop from './pages/ScrollToTop';
import ReactGA from 'react-ga';
import './App.css';

function App() {
   ReactGA.initialize('UA-159362596-1');

   return (
      <Router>
         <SetMeta>
            <title>Dropshadow - Online Dropshadow Generator</title>
            <meta name="description" content="Dropshadow.io is an online tool to create great looking dropshadows and easily convert them into CSS."></meta>
         </SetMeta>
         
         <React.Fragment>
            <Navbar/>
            
            <ScrollToTop/>
            <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/how-to-use" component={HowToUse}/>
               <Route path="/privacy-policy" component={PrivacyPolicy}/>
               <Route path="/" component={FourOFour}/>               
            </Switch>

            <Footer/>
         </React.Fragment>
      </Router>
  );
}

export default App;
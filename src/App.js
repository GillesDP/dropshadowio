import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import Presets from './pages/Presets';
import HowToUse from './pages/HowToUse';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
      <Router>
         <React.Fragment>
            <Navbar/>

            <Switch>
               <Route exact path="/" component={Home}/>
               <Route path="/index" component={Home}/>
               <Route path="/presets" component={Presets}/>
               <Route path="/how-to-use" component={HowToUse}/>
               <Route path="/privacy-policy" component={PrivacyPolicy}/>
               <Route path="/terms-of-use" component={TermsOfUse}/>
            </Switch>

            <Footer/>
         </React.Fragment>
      </Router>
  );
}

export default App;
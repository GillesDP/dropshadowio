import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Tool from './components/tool/Tool';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <div className="container">
         <div className="row">
            <div className="col-lg-8">
               <Tool/>
            </div>
         </div>
      </div>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

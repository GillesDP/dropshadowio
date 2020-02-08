import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Tool from './components/tool/Tool';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Tool/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

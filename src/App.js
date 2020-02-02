import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Generator from './components/tool/generator/Generator';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Generator/>
      <Footer/>
    </React.Fragment>
  );
}

export default App;

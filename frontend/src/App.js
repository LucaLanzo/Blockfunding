import React from 'react';
import { Header, Footer, WhatFund} from './container';
import {Navbar, Build} from './components';
import './App.css'

const App = () => {
  return (
  <div className='App' id='home'>
  <div className='gradient__bg'>
    <Navbar />
    <Header />
  </div>
  <div className='gradient__bg'>
    <WhatFund />
    <Build />
    <Footer />
    </div>
  </div>
  )
};

export default App;
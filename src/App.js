
import React from 'react';
import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './Home'
import Contact from './Contact';
const App = () => {	
  return (
    <div>
	<Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/contact' Component={Contact}/>
    </Routes>
  	</div>	
  )
};

export default App ;
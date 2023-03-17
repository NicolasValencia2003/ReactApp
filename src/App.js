
import React from 'react';
import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Title from './components/Title';

const App = () => {	
  return (
    <div>
    <Title/>
	  <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/contact' Component={Contact}/>
    </Routes>
    <NavBar/>
  	</div>	
  )
};
export default App ;
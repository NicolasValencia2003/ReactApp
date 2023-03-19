
import React from 'react';
import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Contact from './pages/Contact';
import NavBar from './components/NavBar';
import Title from './components/Title';
import Nutrition from './pages/Nutrition';
import Routines from './pages/Routines';

const App = () => {	
  return (
    <div>
    <Title/>
	  <Routes>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/contact' Component={Contact}/>
      <Route exact path='/nutrition' Component={Nutrition}/>
      <Route exact path='/routines' Component={Routines}/>
    </Routes>
    <NavBar/>
  	</div>	
  )
};
export default App ;
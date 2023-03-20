
import React from 'react';
import './App.css'
import {Routes, Route } from 'react-router-dom';
import Start from './pages/Start'
import Home from './pages/Home'
import Forum from './pages/Contact'
import NavBar from './components/NavBar';
import Title from './components/Title';
import Nutrition from './pages/Nutrition';
import Routines from './pages/Routines';
import SystemSettings from './pages/SystemSettings';
import Location from './pages/Location';
import Profile from './pages/Profile';
import Scroll from './pages/ScrollPage';
import Create from './pages/Create';
import Login from './pages/Login';

const App = () => {	
  return (
    <div>
    <Title/>
	  <Routes>
      <Route exact path='/start' Component={Start}/>
      <Route exact path='/' Component={Home}/>
      <Route exact path='/forum' Component={Forum}/>
      <Route exact path='/nutrition' Component={Nutrition}/>
      <Route exact path='/routines' Component={Routines}/>
      <Route exact path='/systemsettings' Component={SystemSettings}/>
      <Route exact path='/location' Component={Location}/>
      <Route exact path='/profile' Component={Profile}/>
      <Route exact path='/scrollpage' Component={Scroll}/>
      <Route exact path='/create' Component={Create}/>
      <Route exact path='/login' Component={Login}/>
    </Routes>
    <NavBar/>
  	</div>	
  )
};
export default App ;
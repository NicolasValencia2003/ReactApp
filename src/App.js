
import React from 'react';
import './App.css'
import {Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Forum from './pages/Contact'
import NavBar from './components/NavBar';
import Title from './components/Title';
import Nutrition from './pages/Nutrition';
import Routines from './pages/Routines';
import SystemSettings from './pages/SystemSettings';
import Location from './pages/Location';
import Profile from './pages/Profile';
import Start from './pages/Start';
import Login from './pages/Login';
import Create from './pages/Create';
import Post from './pages/Post';
import NutritionBreakfast from './pages/NutritionBreakfast';
import LunchOptions from './pages/LunchOptions';
import HealthySnackOptions from './pages/HealthySnackOptions';
import DinnerOptions from './pages/DinnerOptions';

const App = () => {	
  return (
    <div className='MAIN'>
    <Title/>
	  <Routes>
      <Route exact path='/' Component={Start}/>
      <Route exact path='/home' Component={Home}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='/create' Component={Create}/>
      <Route exact path='/forum' Component={Forum}/>
      <Route exact path='/nutrition' Component={Nutrition}/>
      <Route exact path='/routines' Component={Routines}/>
      <Route exact path='/systemsettings' Component={SystemSettings}/>
      <Route exact path='/location' Component={Location}/>
      <Route exact path='/profile' Component={Profile}/>
      <Route exact path='/post' Component={Post}/>
      <Route exact path='/breakfast' Component={NutritionBreakfast}/>
      <Route exact path='/lunch' Component={LunchOptions}/>
      <Route exact path='/snacks' Component={HealthySnackOptions}/>
      <Route exact path='/dinner' Component={DinnerOptions}/>
    </Routes>
    <NavBar/>
  	</div>	
  )
};
export default App ;
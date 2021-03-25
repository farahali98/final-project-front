import './App.css';
import {  BrowserRouter, BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom'
import Login from './components/Login';
import { Component } from 'react';
import {Card} from 'react-bootstrap'
import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Businesses from "./components/Businesses";
import Ngos from './components/Ngos';
import Logos from './components/Logos'
import Prep from './components/Prep';
import Profile from './components/Profile';
import Food from './components/Food';
import Group from './components/Group';
import Boot from './components/Boot';
import StudentViewPage from './Profile/StudentViewPage'
import FooterPage from './components/FooterPage'


function App() {
  return (
    //  <Home/>
    // <Profile/>
    // <Boot/>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home}>
        <Home/>
      </Route>
      <Route path='/businesses' component={Profile}>
        <Profile/>
      </Route>
      <Route path='/ngos' component={Prep}>
        <Prep/>
      </Route>
      <Route path="/login" component={Login}>
        <Login/>
      </Route>
      <Route path='/hello' component={Ngos}>
        <Ngos/>
      </Route>
      <Route path='/food' component={Food}>
        <Food/>
      </Route>
      <Route path='/profile' component={StudentViewPage}>
        <StudentViewPage/>
      </Route> 
      
       
      <FooterPage/>
         </Switch>
  </BrowserRouter>

    )
}

export default App;

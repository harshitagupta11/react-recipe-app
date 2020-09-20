import React,{useEffect,useState} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import './App.css';
import Home from './components/Home'

function App() {
  return(
  <div>
    <BrowserRouter>
<Route path='/'exact component={Home} />

    </BrowserRouter>
   </div>
  )
  
}

export default App;

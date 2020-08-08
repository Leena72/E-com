import React from 'react';
import logo from './logo.svg';
import Home from './main/home'
import Routers from './main/router'
import {connect} from 'react-redux'

import './App.css';
import './App.scss';

function App() {
  return (
    <div className="App">
        <Routers/>
    <Home/>
  
    </div>
  );
}

export default connect()(App)

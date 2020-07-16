import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Content from './components/Content'

import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
     <NavBar/>
     <Content/>
    </div>
  );
}

export default App;

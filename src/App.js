import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar'
import Content from './components/Content'
import CarouselComponent from './components/CarouselComponent'
import CarouselNPM from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <NavBar/>
     <CarouselComponent/>
     <Content/>
    </div>
  );
}

export default App;

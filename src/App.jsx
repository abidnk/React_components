import React from 'react';
import './App.css';
import Header from './component/Header';  
import Body2 from './component/Body2';
import { Navbar } from 'react-bootstrap';

function App() {
   return (
    <div className='App'>
    <Navbar/>
    <Header/>
    <Body2/>
     

    </div>
  );
}

export default App

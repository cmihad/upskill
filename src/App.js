import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Banner from './components/Banner';
import Register from './components/Register';
import Workshop from './components/Workshop';
import Upcomingwork from './components/Upcomingwork';
function App() {
  return (

    <div>
   <div className="container">
      <Navbar/>
      <Banner/>
      <Register />
      <Workshop />
    </div>
      <Upcomingwork/>
    

    </div>
  );
}

export default App;

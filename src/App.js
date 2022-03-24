import React from 'react';
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Services from './Services';
import About from './About';


function App() {

  return (

    <>

      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/services' element={<Services />}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
      
    </>
  );
}

export default App;

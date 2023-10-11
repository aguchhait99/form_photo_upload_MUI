import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddData from '../components/AddData';
import Navbar from '../components/Navbar';
import ShowData from '../components/ShowData';
import Add from '../components/Add';


const Routing = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<AddData/>}/>
            <Route path='/showdata' element={<ShowData/>}/>
            
        </Routes>
      </Router>
    </>
  )
}

export default Routing

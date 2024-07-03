import React from 'react'
import About from '../Components/About';
import Chef from '../Components/Chef';
import Package from '../Components/Package';
import Services from '../Components/Services';
import Navbar from '../Components/Navbar';

const HomePage = () => {
  return (
    <div>
       <Navbar/>
      <Services/>
      <About/>
      <Package/>
      <Chef/>
    </div>
  )
}

export default HomePage
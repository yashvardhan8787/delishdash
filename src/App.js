import './App.css';
import Footer from './Components/Footer';
import AboutPage from './Pages/AboutPage';
import ChefPage from './Pages/ChefPage';
import ContactPage from './Pages/ContactPage';
import HomePage from './Pages/HomePage';
import PackagesPage from './Pages/PackagesPage';
import ServicePage from './Pages/ServicePage';
import { BrowserRouter, Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>

          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/services' element={<ServicePage/>}/>
          <Route path='/chefs' element={<ChefPage/>}/>
          <Route path='/packages' element={<PackagesPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>

       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';
import React from 'react';


//page components
import Unregister from './pages/Unregister';
import Editgrade from './pages/Editgrade';
import Instructordashboard from './pages/Instructordashboard';
import Instructorportal from './pages/Instructorportal';
import Registeredstudents from './pages/Registeredstudents';
import Resgisterasnewstudent from './pages/Resgisterasnewstudent';
import Studentadded from './pages/Studentadded';
import Studentdashboard from './pages/Studentdashboard';
import Studentportal from './pages/Studentportal';
import {GlobalContextProvider} from './context/GlobalContext';





function App() {
  
  return (
    
    <GlobalContextProvider >
      
      <div className="App">
        <BrowserRouter>
          <nav>

            <div className="dropdown">
              <button className="dropbtn btnmenu">Menu</button>
              <div id="myDropdown" className="dropdown-content">
                <Link to="/">Student Portal</Link>
                <Link to="/Instructorportal">Instructor Portal</Link>
                <a href="https://portfolio-7ca28.web.app/">Portfolio Website</a>
              </div>
            </div>

          </nav>
          <Routes>
            <Route path='/unregister' element={<Unregister />} />

            <Route path='/editgrade' element={<Editgrade />} />

            
            <Route path='/instructordashboard' element={<Instructordashboard />} />

            <Route path='/instructorportal' element={<Instructorportal />} />

            <Route path='/registeredstudents' element={<Registeredstudents />} />

            <Route path='/registerasnewstudent' element={<Resgisterasnewstudent />} />

            <Route path='/studentadded' element={<Studentadded />} />
            
            <Route path='/studentdashboard' element={ <Studentdashboard/>}/>

            <Route path='/' element={<Studentportal />} />
            
          </Routes>
        </BrowserRouter>

      </div>
      
     
      </GlobalContextProvider>

  );
}


export default App

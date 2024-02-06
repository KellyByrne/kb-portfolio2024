import { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import ResumePage from './pages/ResumePage';
import AboutPage from './pages/AboutPage';
import Menu from './components/Menu';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import './App.css'

function App() {

  
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/resume" element={<ResumePage/>}></Route>
                {/* <Route path="/about" element={<AboutPage/>}></Route> */}
                <Route path="/project/:id" element={<ProjectDetailsPage/>}></Route>
            </Routes>
        </BrowserRouter>
    );

}

export default App;






  


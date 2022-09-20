import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home/Home'
import Apropos from './pages/Apropos/Apropos';
import Erreur from './pages/Erreur/Erreur';
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';

import Logement from './pages/Logement/Logement'


function App() {

  return (
  <div className='router'>
      
      <Header />
      
      <Routes basename={process.env.PUBLIC_URL}>

        <Route path="/" element={<Home />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/propos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} /> 
       
      </Routes>

      <Footer />
      
    </div>
    
  );
}

export default App;






//import '../App.css';
//import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react';
import Home from './pages/Home/Home'
import Apropos from './pages/Apropos/Apropos';
import Erreur from './pages/Erreur/Erreur';
import Header from "./components/Header/Header"
import Footer from './components/Footer/Footer';
import Galerie from './components/Galerie/Galerie';
import CarteLocation from './components/CarteLocation/CarteLocation';
import Logement from './pages/Logement/Logement'
import Tags from './components/Tags/Tags';
import Accordeon from './components/Accordeon/Accordeon';
import Rating from './components/Rating/Rating';

function App() {


  return (
  <div>
      
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/propos/:id" element={<Apropos />} /> */}
        <Route path="*" element={<Erreur />} />
        <Route path="/galerie" element={<Galerie />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/propos" element={<Apropos />} />
        <Route path="/carte" element={<CarteLocation />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/accordeon" element={<Accordeon />} />
        <Route path="/notation" element={<Rating />} />
        {/* <Route path="/erreur" element={<Erreur />} />  */}
      </Routes>

      <Footer />
      
    </div>
    
  );
}

export default App;





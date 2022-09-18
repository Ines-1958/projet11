import React from 'react'
import CarteLocation from '../../components/CarteLocation/CarteLocation'
import '../Home/Home.css'

function Home(props) {
  return (
    <div className="container">
      <h1 className="home-title">
        <span>Chez vous,</span> <span>partout et ailleurs</span>
      </h1>

      <CarteLocation />
    </div>
  )
}

export default Home

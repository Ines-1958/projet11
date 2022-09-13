import React, { useState, useEffect } from 'react'
import CarteLocation from '../../components/CarteLocation/CarteLocation'
import '../Home/Home.css'

function Home(props) {
  return (
    <div className="container">
      <h1 className="home-title">Chez vous, partout et ailleurs</h1>
      <CarteLocation />
    </div>
  )
}

export default Home

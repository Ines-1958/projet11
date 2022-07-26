import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../CarteLocation/CarteLocation.css'

export default function CarteLocation() {
  const [jsonData, setjsonData] = useState([])

  useEffect(() => {
    const getHome = async () => {
      const response = await fetch('/donnees-json/logements.json')

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }

      const json = await response.json()
      setjsonData(json)
    }
    getHome()
  }, [])

  return (
    <div className="container-location">
      <div className="content-location">
        {jsonData &&
          jsonData.map((home, index) => (
            <NavLink
              key={index}
              className="carte-location"
              to={`/logement/${home.id}`}
            >
              <img src={home.cover} className="location" alt="" />
              <p>{home.title}</p>
            </NavLink>
          ))}
      </div>
    </div>
  )
}

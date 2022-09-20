import React from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../CarteLocation/CarteLocation.css'
import '../../../src/donnees-json/logements.json'

export default function CarteLocation() {
  const [jsonData, setjsonData] = useState([])

  useEffect(() => {
    const getHome = async () => {
      const response = await fetch('<host>:<port>/donnees-json/logements.json')

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
              <div
                className="location"
                key={`${'home'}-${index}`}
                id={`${'home'}-${index}`}
              >
                {home.title}
              </div>
            </NavLink>
          ))}
      </div>
    </div>
  )
}

import React, { useState, useEffect } from 'react'
import etoile from '../../assets/etoile.svg'
import etoileCouleur from '../../assets/etoileCouleur.svg'
import '../Rating/Rating.css'
import { useParams } from 'react-router-dom'

export default function Rating() {
  const { id } = useParams()
  console.log(id)

  const [jsonData, setjsonData] = useState([])

  useEffect(() => {
    const getHome = async () => {
      const response = await fetch('/donnees-json/logements.json')
      console.log(response)
      if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }

      const json = await response.json()
      setjsonData(json)

      console.log(json)
    }
    getHome()
  }, [])

  return (
    <div>
      <div className="notation">
        {jsonData &&
          jsonData
            .filter((test) => test.id === id)
            .map((star, index) => (
              <div className="note-etoiles">
                {[...Array(5)].map((item, index) => {
                  let imgStar = star.rating > index ? etoileCouleur : etoile
                  // console.log(imgStar)
                  // console.log(star.rating)
                  // console.log(index)
                  return (
                    <img
                      key={`${item}-${index}`}
                      src={imgStar}
                      alt=""
                      className="colorful-star"
                    />
                  )
                })}
              </div>
            ))}
      </div>
    </div>
  )
}

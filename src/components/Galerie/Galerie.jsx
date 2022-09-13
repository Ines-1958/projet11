import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../Galerie/Galerie.css'

export default function Galerie(props) {
  const { id } = useParams()

  const [imgPrincipale, setimgPrincipale] = useState(0)
  console.log(imgPrincipale)

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
    <>
      {jsonData &&
        jsonData
          .filter((item) => item.id === id)
          .map((image, index) => {
            let galerieLength = image.pictures.length
            let total = image.pictures

            const nextImage = () => {
              setimgPrincipale(
                imgPrincipale === galerieLength - 1 ? 0 : imgPrincipale + 1
              )
            }
            const prevImage = () => {
              console.log(imgPrincipale)
              setimgPrincipale(
                imgPrincipale === 0 ? galerieLength - 1 : imgPrincipale - 1
              )
            }

            return (
              <div className="galerie-container">
                <div
                  className={
                    galerieLength <= 1 ? 'chevron-hidden' : 'chevron-visible'
                  }
                >
                  <button className="previous btn" onClick={prevImage}>
                    ＜
                  </button>
                  <button className="next btn" onClick={nextImage}>
                    ＞
                  </button>
                </div>
                <div className="galerie">
                  <img
                    src={image.pictures[imgPrincipale]}
                    alt=""
                    key={index}
                    className="img-galerie"
                  />
                  <p className="img-position">
                    {imgPrincipale + 1} / {galerieLength}
                  </p>
                </div>
              </div>
            )
          })}
    </>
  )
}

import React, { useState, useEffect } from 'react'
import Tags from '../../components/Tags/Tags'
import { useParams, useNavigate } from 'react-router-dom'
import '../Logement/Logement.css'
import Accordeon from '../../components/Accordeon/Accordeon'

import Rating from '../../components/Rating/Rating'
import '../../components/Rating/Rating.css'
import Galerie from '../../components/Galerie/Galerie'
import etoile from '../../assets/etoile.svg'
import etoileCouleur from '../../assets/etoileCouleur.svg'

export default function Logement() {
  const { id } = useParams()

  const navigation = useNavigate()

  const [location, setLocation] = useState(null)

  const [imgPrincipale, setimgPrincipale] = useState(0)

  const nextImage = () => {
    setimgPrincipale(
      imgPrincipale === location.pictures.length - 1 ? 0 : imgPrincipale + 1
    )
  }

  const prevImage = () => {
    setimgPrincipale(
      imgPrincipale === 0 ? location.pictures.length - 1 : imgPrincipale - 1
    )
  }

  useEffect(() => {
    const getHome = async () => {
      const response = await fetch('/donnees-json/logements.json')

      if (!response.ok) {
        const message = `An error has occured: ${response.status}`
        throw new Error(message)
      }

      const json = await response.json()

      const idFiltered = json.find((heberg) => heberg.id === id)

      setLocation(idFiltered)

      if (typeof idFiltered === 'undefined') {
        navigation('*')
      }
    }
    getHome()
  }, [id, navigation])

  return (
    <div className="logement-container">
      {location && (
        <>
          <div className="galerie-container">
            <Galerie
              src={location.pictures[imgPrincipale]}
              length={location.pictures.length}
              imgPpale={imgPrincipale}
              next={nextImage}
              previous={prevImage}
            />
          </div>

          <div className="hote">
            <div className="bloc-title">
              <h1>{location.title}</h1>
              <p>{location.location}</p>
              <ul className="list-tags">
                {location.tags.map((tag, index) => (
                  <Tags tags={tag} key={`${tag}-${index}`} id={id} />
                ))}
              </ul>
            </div>
            <div className="home-host">
              <div className="bloc-host">
                <p>{location.host.name}</p>
                <img src={location.host.picture} alt="" />
              </div>

              <div className="notation">
                <div className="note-etoiles">
                  {[...Array(5)].map((star, index) => {
                    let imgStar =
                      location.rating > index ? etoileCouleur : etoile

                    return (
                      <Rating
                        key={`${star}-${index}`}
                        id={`${'item'}-${index}`}
                        src={imgStar}
                        className="colorful-star"
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="accordeon-container">
            <Accordeon title={'Description'}>{location.description}</Accordeon>

            <Accordeon title={'Équipements'}>
              {location.equipments.map((equip, index) => (
                <p
                  equipments={equip}
                  key={`${equip}-${index}`}
                  id={`${equip}-${index}`}
                >
                  {equip}
                </p>
              ))}
            </Accordeon>
          </div>
        </>
      )}
    </div>
  )
}

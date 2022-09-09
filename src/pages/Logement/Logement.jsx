import React, { useState, useEffect } from 'react'
import Tags from '../../components/Tags/Tags'
import { useParams} from 'react-router-dom'
import '../Logement/Logement.css'
import Accordeon from '../../components/Accordeon/Accordeon'
import etoile from '../../assets/etoile.svg'

import Rating from '../../components/Rating/Rating'
import Galerie from '../../components/Galerie/Galerie'


export default function Logement() {

    // const tags = useParams()
    // console.log(tags)

    const {id} = useParams()
    console.log(id)

    const [jsonData, setjsonData] = useState([])

    // const [rate, setRate] = useState(0);

    useEffect(() => {
        
          const getHome = async () => {
            const response = await fetch('/donnees-json/logements.json')
            console.log(response)
            if (!response.ok) {
              const message = `An error has occured: ${response.status}`;
              throw new Error(message);
            }

            const json = await response.json()
            setjsonData(json)

            console.log(json)
            
          }
          getHome()
    }, [])

  return (
    
    <div className='logement-container'>
        <Galerie />
        {jsonData && jsonData
        .filter(heberg => heberg.id === id)
        
        .map((item, index)  => 
          <>
          <div className='hote'>
              <div className='bloc-title'>
                <h1 id={item.id} key={item.id}>{item.title}</h1>
                <p key={index} id={item.location}>{item.location}</p>
              </div>
              <div className='home-host'>
                <div className='bloc-host'>
                  <p key={index} id={index}>{item.host.name}</p>
                  <img src={item.host.picture} alt=""/>
                </div>
                
                <Rating />

              </div>  
            </div>
            
            <ul className='list-tags'>
                {item.tags.map((tag, index) => 
                  <Tags 
                    tags={tag} 
                    key={index} 
                    id={id}/>
                )}
            </ul>

            <div className='accordeon-container'>
              <Accordeon 
                title={"Description"}
                key={item.id}
                id={item.id}>
                  {item.description}
              </Accordeon>
              
              <Accordeon title={"Équipements"}>
                {item.equipments.map((equip, index) => 
                    <p 
                    equipments={equip}
                    key={`${equip}-${index}`}
                    id={`${equip}-${index}`}>{equip}</p>
                  )}
              </Accordeon>

                  
            </div>
            
            {/* <div className='galerie-container'>
              {item.pictures.map((image, index) => 
              <Galerie 
              images={image}
              src={item.pictures[0]}
              key={ `${image}-${index}`}
              id={ `${image}-${index}`}/>
              )}

              <Galerie 
              src={item.pictures[0]}/>
            </div> */}
            
          </>
        )}
         

    </div>

  )
}

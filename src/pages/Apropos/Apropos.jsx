import React from 'react'
import '../Apropos/Apropos.css'
import bgApropos from './bgApropos.png';
import { useState, useEffect } from 'react';
import Accordeon from '../../components/Accordeon/Accordeon';

export default function Apropos() {

  // const [jsonData, setjsonData] = useState([])

  //   useEffect(() => {
        
  //         const getHome = async () => {
  //           const response = await fetch('/donnees-json/logements.json')
  //           console.log(response)
  //           if (!response.ok) {
  //             const message = `An error has occured: ${response.status}`;
  //             throw new Error(message);
  //           }

  //           const json = await response.json()
  //           setjsonData(json)

  //           console.log(json)
            
  //         }
  //         getHome()
  //   }, [])

  const [dataApropos, setdataApropos] = useState([
    {
      title:"Fiabilité",
    content:"Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes"
  },
  {
    title:"Respect",
    content:"La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title:"Service",
    content:"Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title:"Sécurité",
    content:"La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }

  ])

  return (
    <div className="container-propos">
      <img src={bgApropos} className="bgImg" alt=""/>  
      
      {dataApropos.map((item, index) => {
          return (
            <Accordeon 
            title={item.title}
            content={item.content}
            key={index}
            id={index}>
              {item.content}
            </Accordeon>
          )
        })}
      
      
    </div>
  )
}

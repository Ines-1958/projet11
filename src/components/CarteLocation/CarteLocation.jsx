import React from 'react'
import { useState, useEffect } from 'react';
import {useNavigate, useParams} from 'react-router-dom'
import {Link, NavLink} from 'react-router-dom'
import '../CarteLocation/CarteLocation.css'



export default function CarteLocation() {

    // const redPageLogement = useNavigate ()
    const { id } = useParams();
    console.log(id)
    

    const [jsonData, setjsonData] = useState([])

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

            // console.log(json)
            // console.log(json[3].pictures[0]) 
            
          }
          getHome()
    }, [])
  

    return (
      <div className="container-location">
        {/* <div className="carte-location">
            {jsonData? jsonData.map(home => <div className="location" key={home.id}>{home.title}</div>): "loading"}  
            
        </div> */}

        <div className="content-location">
          
            {jsonData && 
            jsonData
            // .filter((home) => home.id === id)
            .map((home, index) => 
              <NavLink className="carte-location" to={`/logement/${home.id}`}>
                <div className="location" key={ `${home}-${index}`} id={ `${home}-${index}`}>{home.title}</div>
              </NavLink>
              )} 
           
        </div>
               
      </div>
    )
}
  



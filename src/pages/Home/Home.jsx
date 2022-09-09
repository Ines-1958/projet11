import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import styled from 'styled-components'


import CarteLocation from '../../components/CarteLocation/CarteLocation'
import '../Home/Home.css'
import bgImage from './bgImage.png'

function Home (props) {
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

            console.log(json)
            console.log(json[3].pictures[0]) 
            
          }
          getHome()
    }, [])
  

    return (
      <div className="container">  
        <h1 className='home-title'>Chez vous, partout et ailleurs</h1>  
        <CarteLocation />
       
               
      </div>
    )
}

export default Home
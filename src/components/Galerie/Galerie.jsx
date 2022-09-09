import React, { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom'
import '../Galerie/Galerie.css'
// import chevronLeft from '../../assets/chevronLeft.png'
// import chevronRight from '../../assets/chevronRight.png'


export default function Galerie(props) {

  const {id} = useParams()

  const [imgPrincipale, setimgPrincipale] = useState(0)
  console.log(imgPrincipale)
  
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
      }
      getHome()
    }, [])

  return (
    <>
      { jsonData && jsonData
      .filter(item => item.id === id) 
      .map((image, index) => {
        let imgLenth = image.pictures.length;
        // console.log(imgLenth);
        let total = image.pictures;
        // console.log(total);y

        const  nextImage  = () => {
          setimgPrincipale ( imgPrincipale  ===  imgLenth - 1 ? 0 : imgPrincipale + 1 ) ;
        } ;
        const  prevImage  = () => {
          console.log(imgPrincipale)
          setimgPrincipale ( imgPrincipale  ===  0 ?  imgLenth - 1 : imgPrincipale -1) ;
          console.log(imgPrincipale)
        } ;

        return(
        <div className='galerie-container'>
            <button className='previous btn' onClick={prevImage}>＜</button>
            <button className='next btn' onClick={nextImage}>＞</button>
            <div className='galerie'>
              <img src={image.pictures[imgPrincipale]} alt="" key={index} className="img-galerie"/>
              <p className='img-position'>{imgPrincipale +1} / {imgLenth}</p>
            </div>
          </div>)
      }
     
       )
      }
      </>
  )
}


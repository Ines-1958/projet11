import React , { useState, useEffect, useRef } from 'react';
import '../Accordeon/Accordeon.css'
import chevronDown from '../../assets/chevronDown.png'

export default function Accordeon(props) {
    console.log(props)

    const [toggle, setToggle] = useState(false);
    const [hauteur, setHauteur] = useState(); //Hauteur de l'élément

    const toggleAccordeon = () => {
        setToggle(!toggle);
    }

    const refHauteur = useRef();

    // useEffect(() => {
    //     setHauteur(`${refHauteur.current.scrollHeight}px`) //Pour remplir avec la hauteur de l'élément
    // }, [])
    


  return (
    <div className="accordeon">
        <div 
        onClick={toggleAccordeon}
        className="accordeon-visible">
            <h2>{props.title}</h2>
            <img src={chevronDown} alt=""/>
        </div>

        <div 
        // ref={refHauteur}
        className={toggle ? 'accordeon-toggle animated visible' : 'hidden'}
        // style={{height: toggle ? `${hauteur}` : "0px"}}
        >
            <div
            className='toggle-content'
            aria-hidden={toggle? "true" : "false"}>{props.children}</div>
        </div>
        
    </div>
  )
}

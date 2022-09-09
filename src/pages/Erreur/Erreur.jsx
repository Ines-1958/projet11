import React from 'react'
import {useNavigate} from 'react-router-dom'
import '../Erreur/Erreur.css'
import imgErreur from '../Erreur/imgErreur.png'

export default function Erreur() {

    const navigation = useNavigate ()
  return (
    <div className='error'>
        {/* <p className='erreur404'>404</p> */}
        <img src={imgErreur} alt="" />
        <p className='text'>Oups! La page que vous demandez n'existe pas.</p>
        <p onClick={() => navigation("/")}>Retourner sur la page d’accueil</p>
    </div>
  )
}

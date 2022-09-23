import React from 'react'
import '../Galerie/Galerie.css'

export default function Galerie(props) {
  let galerieLength = props.length

  const nextImage = () => {
    props.funcSet(props.imgPpale === galerieLength - 1 ? 0 : props.imgPpale + 1)
  }

  const prevImage = () => {
    props.funcSet(props.imgPpale === 0 ? galerieLength - 1 : props.imgPpale - 1)
  }

  return (
    <>
      <div
        className={galerieLength <= 1 ? 'chevron-hidden' : 'chevron-visible'}
      >
        <button className="previous btn" onClick={prevImage}>
          ＜
        </button>
        <button className="next btn" onClick={nextImage}>
          ＞
        </button>
      </div>
      <div className="galerie">
        <img src={props.src} alt="" className="img-galerie" />
        <p className="img-position">
          {props.imgPpale + 1} / {galerieLength}
        </p>
      </div>
    </>
  )
}

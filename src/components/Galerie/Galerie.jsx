import React from 'react'
import '../Galerie/Galerie.css'

export default function Galerie(props) {
  let galerieLength = props.length

  return (
    <>
      <div
        className={galerieLength <= 1 ? 'chevron-hidden' : 'chevron-visible'}
      >
        <button className="previous btn" onClick={props.previous}>
          ＜
        </button>
        <button className="next btn" onClick={props.next}>
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

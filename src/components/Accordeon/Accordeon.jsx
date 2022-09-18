import React, { useState } from 'react'
import '../Accordeon/Accordeon.css'
import chevronDown from '../../assets/chevronDown.png'

export default function Accordeon(props) {
  const [toggle, setToggle] = useState(false)

  const toggleAccordeon = () => {
    setToggle(!toggle)
  }

  return (
    <div className="accordeon">
      <div onClick={toggleAccordeon} className="accordeon-visible">
        <h2>{props.title}</h2>
        <img src={chevronDown} className={toggle ? 'rotation' : ''} alt="" />
      </div>

      <div className={toggle ? 'accordeon-toggle animated visible' : 'hidden'}>
        <div className="toggle-content" aria-hidden={toggle ? 'true' : 'false'}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

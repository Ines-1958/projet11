import React from 'react'
import '../Footer/Footer.css'
import logoFooter from '../../assets/logoFooter.png'

export default function Footer() {
  return (
    <div className='footer-kasa'>
        <img src={logoFooter} alt="" />
        <div>
          <p>© 2020 Kasa. All rights reserved</p>
        </div>
    </div>
  )
}

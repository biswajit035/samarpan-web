import React, { useEffect, useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  const [size, setSize] = useState("3x")
  useEffect(() => {
    window.addEventListener('resize', detectSize)

    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  if(windowDimenion.winWidth === 1366)
    console.log("karo");

  return (
    <div className='container'>

      <h1 className="contact-head">CONTACT US</h1>

      <div className="row">
        <div className="contact-box col-lg-4">
          <a href="#">
            {/* <i class="bi bi-instagram"></i> */}
            <a href='https://www.instagram.com/samarpan_hit/' target="_blank"><i className="fa-brands fa-instagram fa-customise contact-icon"/></a>
          </a>
          <h3>INSTAGRAM</h3>
          <a href='https://www.instagram.com/samarpan_hit/' target="_blank"><p>@samarpan_hit</p></a>
        </div>
        <div className="contact-box col-lg-4">
          <a href="#">
            <a href='https://www.facebook.com/samarpanathith' target="_blank">
              <i className="fa-brands fa-facebook-f fa-customise contact-icon"/></a>
          </a>
          <h3>FACEBOOK</h3>
          <a href='https://www.facebook.com/samarpanathith' target="_blank"><p>@samarpanathith</p></a>
        </div>
        <div className="contact-box col-lg-4">
          <a href="https://www.linkedin.com/company/samarpanhit">
            <i className="fa-brands fa-linkedin fa-customise contact-icon"/>
          </a>
          <h3>LINKEDIN</h3>
          <a href='https://www.linkedin.com/company/samarpanhit'>
          <p>@samarpanhit</p></a>
        </div>
      </div>
      <div className="row">
        <div className="contact-box col-lg-6">
          <a href="https://www.google.com/maps/place/Haldia+Institute+of+Technology/@22.0480855,88.0828135,14.31z/data=!4m5!3m4!1s0x3a02f0bd0fcacc69:0x409c7ac845fe6280!8m2!3d22.0505921!4d88.0722126?hl=en" target='_blank'>
            <i className="fa-solid fa-location-dot fa-customise contact-icon"/>
          </a>
          <h3>LOCATION</h3>
          <p>Haldia institute of technology, Haldia, West bengal, 721657</p>
        </div>
        <div className="contact-box col-lg-6">
          <a href='mailto:hithaldia.samarpan@gmail.com'>
            <i className="fa-solid fa-envelope fa-customise contact-icon"/>
          </a>
          <h3>EMAIL</h3>
          <a href='mailto:hithaldia.samarpan@gmail.com'>
            <p>hithaldia.samarpan@gmail.com</p></a>
        </div>
      </div>
    </div>
  )
}

export default Contact
import React from 'react'
import "./Intro.css"
import bg from "../../../public/assests/image.png"
import btnImg from "../../../public/assests/hireme.png"
import {Link} from "react-scroll"


function Intro() {
  return (
    <section id="intro">
        <div className="introContent">
            <span className='hello'>Hello,</span>
            <span className="introText">I'm <span className="introName">Hrita</span> <br/> Student</span>
            <p className="introPara">I am currently a student passionate in learning about todays <br/> changing technology. Currently in the phase of learning.</p>
            <Link><button className='btn'><img src={btnImg} alt="Hire Me" className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  )
}

export default Intro
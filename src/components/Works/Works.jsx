import React from 'react'
import "./Works.css"
import Portfolio1 from "../../../public/assests/portfolio-1.png"
import Portfolio2 from "../../../public/assests/portfolio-2.png"
import Portfolio3 from "../../../public/assests/portfolio-3.png"
import Portfolio4 from "../../../public/assests/portfolio-4.png"
import Portfolio5 from "../../../public/assests/portfolio-5.png"
import Portfolio6 from "../../../public/assests/portfolio-6.png"

function Works() {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention in small details and experience to help businessess achieve their goals and create a online presence.</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="" className="worksImg" />
            <img src={Portfolio2} alt="" className="worksImg" />
            <img src={Portfolio3} alt="" className="worksImg" />
            <img src={Portfolio4} alt="" className="worksImg" />
            <img src={Portfolio5} alt="" className="worksImg" />
            <img src={Portfolio6} alt="" className="worksImg" />
        </div>
        <button className='worksBtn'>See More</button>
    </section>
  )
}

export default Works
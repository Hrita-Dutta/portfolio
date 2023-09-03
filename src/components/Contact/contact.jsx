import React from 'react'
import "./Contact.css"
import Walmart from "../../../public/assests/walmart.png"
import Adobe from "../../../public/assests/adobe.png"
import Microsoft from "../../../public/assests/microsoft.png"
import Facebook from "../../../public/assests/facebook.png"

function Contact() {
  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">
                I have had the opportunity to work with a diverse group of companies. Some of the notable companies I have worked which includes
            </p>
            <div className="clientImgs">
                <img src={Walmart} alt="Clients" className="clientImg" />
                <img src={Adobe} alt="Clients" className="clientImg" />
                <img src={Microsoft} alt="Clients" className="clientImg" />
                <img src={Facebook} alt="Clients" className="clientImg" />
            </div>
        </div>
         <div id="contact">

         </div>
    </section>
  )
}

export default Contact
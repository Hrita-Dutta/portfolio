import React, { useRef } from 'react'
import "./Contact.css"
import Walmart from "../../../public/assests/walmart.png"
import Adobe from "../../../public/assests/adobe.png"
import Microsoft from "../../../public/assests/microsoft.png"
import Facebook from "../../../public/assests/facebook.png"
import FacebookIcon from "../../../public/assests/facebook-icon.png"
import TwitterIcon from "../../../public/assests/twitter.png"
import YoutubeIcon from "../../../public/assests/youtube.png"
import InstagramIcon from "../../../public/assests/instagram.png"
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_ga63prr', 'template_csyqk4p', form.current, 'lUSuVb2JoAozqp_Dlo25m')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };
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
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="your_name"/>
                <input type="email" className="email" placeholder='Your Email' name="your_email"/>
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value='Send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Twitter" className="link" />
                    <img src={YoutubeIcon} alt="Youtube" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
         </div>
    </section>
  )
}

export default Contact
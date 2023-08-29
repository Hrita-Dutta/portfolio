import React from 'react'
import "./Skills.css"
import UIDesign from "../../../public/assests/ui-design.png"
import WebDesign from "../../../public/assests/website-design.png"
import AppDesign from "../../../public/assests/app-design.png"

function Skills() {
  return (
    <section id='skills'>
        <span className="skillTitle">
            What I do
        </span>
        <span className="skillDesc">I have embarked on a journey to understand the basics of web design, including HTML and CSS. While my experience is still growing, I am dedicated to honing these fundamental coding languages to create simple and functional web pages.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>This is a demo text, you can write your own content here.</p>
                </div>
            </div>
        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WebDesign</h2>
                    <p>This demo text can be changed while making the production ready website.</p>
                </div>
            </div>
        </div>
        <div className="skillBars">
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>AppDesign</h2>
                    <p>You can write text related to mobile app development.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
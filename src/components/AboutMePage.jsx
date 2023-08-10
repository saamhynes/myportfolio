import React from 'react'
import { Link } from 'react-router-dom';

const AboutMePage = () => {
  return (
    <div className='amp-container'>
    <Link to="/" className='home-link'>Home</Link>

    <br/>

    <h1 className='whoami'>Who Am I</h1>

    <div className='aboutme-para'>

    <p>I am Samantha Hynes. A Software Development student at Keyin College. I am in my third semester of software development and really enjoying myself thus far.</p><br/>

    <p>I haven't always been in the tech industry. For the last 10 years I have been a Red Seal Welder in oil and gas. I knew welding wasn't where I would be for the rest of my life, but it has helped shaped me into who I am today.</p><br/>

    <p>I love to learn and I love to create. I am passionate about self growth and learning new things. I enjoy team dynamics but also enjoy the solitude that comes with working alone. </p><br/>

    <p>Being new to the tech industry I am so far having fun with the aesthetics of webpages and UI/UX design. I grew up with a love for art and its nice to be able to have a creative outlet in this industry. I am excited for what my future entails. </p>

    <p>Outside of school and work I love to spend time with my little family. Living in Labrador we have great winters and spend the majority of our time in the snow. In the summers you can find us in our garden - experimenting to grow something new.</p>

    </div>

    <img src={require("./Images/Image.jpeg")} alt="Profile Image" className='aboutmepage-image' />

    <img src={require("./Images/Welding.jpeg")} alt="Welding Image" className='aboutmepage-image' />

    <img src={require("./Images/Welding2.jpeg")} alt="Welding Image" className='aboutmepage-image' />

    <img src={require("./Images/MargosGarden.jpeg")} alt="Welding Image" className='aboutmepage-image' />

    <img src={require("./Images/FamSkidoo.jpeg")} alt="Welding Image" className='aboutmepage-image' />

    <img src={require("./Images/NorthernLights.jpeg")} alt="Welding Image" className='aboutmepage-image' />
  
    
    

    <div className='foot-container2'>

      <Link to="/" className='home-link'>Home</Link>&nbsp;

      <button  onClick = {() => {
        window.open("https://www.linkedin.com/in/samantha-hynes-280866279/", "_blank");
                }}
                className='contact-btn'>Hire Me
                </button>&nbsp;

      <button  onClick = {() => {
        window.open("https://github.com/saamhynes?tab=repositories", "_blank");
                }}
                className='contact-btn'>GitHub</button>
    </div>
    </div>
  )
}

export default AboutMePage
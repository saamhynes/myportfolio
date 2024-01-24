import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (<>
  <div className='aboutme-container'>

    <div className='aboutme'>
        <h2>About Me</h2><br/>
          <p>After a decade in oil and gas, I've switched gears to dive into software development. As a student in this tech world, I'm excited about learning and growing. Bringing problem solving skills from a decade in the oil patch, I'm eager to channel this expertise into coding and development.

          I'm diving into new languages and frameworks, soaking up everything I can. I love teamwork and innovation, and I'm eager to bring my mix of skills to the ever-evolving tech scene.

          I'm on the lookout for opportunities to learn, grow, and make my mark in the thrilling world of software development.<Link to="/AboutMePage" className='aboutme-link'> more..</Link></p>
    </div>

    <div className='image-container'>
    <img src="https://www.artify.co/storage/sources/490d1719-cc4e-41df-bc26-8e9a997c3b5c_thumb-md.webp"
    alt="icon3"
    style = {{maxWidth: "200px", maxHeight: "200px"}} />
    </div>
</div>
</>
  )
}

export default AboutMe
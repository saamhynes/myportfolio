import React from 'react'
import { Link } from 'react-router-dom'

const AboutMe = () => {
  return (<>
  <div className='aboutme-container'>

    <div className='aboutme'>
        <h2>About Me</h2><br/>
          <p>Adept at crafting captivating designs, I harmonize cutting-edge digital tools, artistic finesse, and code wizardry. From meticulous UI/UX in Figma to Procreate's imaginative canvas, my creations resonate with audiences, achieving exceptional impact. Embracing the authenticity of pen and
          paper, I infuse my frontend prowess with JavaScript, HTML/CSS, and backend expertise, delivering seamless and impactful results.<Link to="/AboutMePage" className='aboutme-link'> more..</Link></p>
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
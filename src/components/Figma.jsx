import React from 'react'
import {Link } from 'react-router-dom'

const Figma = () => {
  return (<>
  <div className='figma-welcome-container'>

<Link to="/" className='home-link'>Home</Link>

<br/>

<h2>Figma Designs</h2>

<div className='figma-para'>

<p>I have loved having a UI/UX class in this course. Unfortunately it was only for one semester, and I will certainly miss it moving forward in the Software Development program. </p>

<br/>

<p>But I do feel I took full advantage of this class and tried to learn and soak up everything that I could.  </p>

<br/>

<p>I like seeing the tiny details among the big picture. How simply changing the opacity in a button can change the look and feel of the entire page.</p>

<br/>

<p>There is something special about creating something for someone and seeing how fulfilled they are by it. They know there is a future beyond the design. I want to put their perspective into reality and make it happen for them. </p>

<br/>

<p>This is why I love design, and I love being able to write code to bring it to life.</p>

</div>



<div className='figma-page-container'>
    <div className='figma-page'>
        <img src={require("./Images/SS2F1.png")} alt="Project Image" className='figma-image1' />

         <img src={require("./Images/SS1F1.png")} alt="Project Image" className='figma-image2' />

        <img src={require("./Images/SS3F1.png")} alt="Project Image" className='figma-image3' /> 

        <img src={require("./Images/SS4F1.png")} alt="Project Image" className='figma-image4' /> 
    </div>
    
    </div>
</div>

    <div className='figma-foot-container'>

        <Link to="/" className='home-link'>
            Home
        </Link>&nbsp;

        <button  onClick = {() => {
         window.open("https://www.linkedin.com/in/samantha-hynes-280866279/", "_blank"
         );
        }}
        className='contact-btn'>Hire Me
        </button>&nbsp;

        <button  onClick = {() => {
        window.open("https://github.com/saamhynes?tab=repositories", "_blank"
        );
        }}
        className='contact-btn'>GitHub</button>

    </div>


    
</>
    
  )
}

export default Figma
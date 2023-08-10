import React from 'react'

const Header = () => {

  return (
  
    <div className='welcome-container'>

        <div className='image-container'>
            <img src="https://www.artify.co/storage/sources/81fe97f1-0b08-4e29-8165-5bf76ccff664_thumb-md.webp"
            alt="icon1"
            style = {{maxWidth: "150px", maxHeight: "150px"}} />
        </div>

        <div className='welcome'>
            <h2>Hey, I'm Sam.<br/>
            Welcome to my codeventure into<br/>
            innovation.</h2>
            <p>Student | Software Developer</p>
          <p>Mastering Backend Development and UI/UX Design</p><br/>

          <div>
            
            <button  onClick = {() => {
              window.open("https://www.linkedin.com/in/samantha-hynes-280866279/", "_blank"
              );
            }}
            className='contact-btn'>Hire Me</button>&nbsp;
            <button  onClick = {() => {
              window.open("https://github.com/saamhynes?tab=repositories", "_blank"
              );
            }}
            className='contact-btn'>GitHub</button>
          </div> 

        </div>
    

    </div>
    
  )
}

export default Header
import React from 'react'
import { Link } from 'react-router-dom'

const ContactMe = () => {
  return (
    <div className='contact-container'>
        <div className='contact-title'></div>
        <h2>Lets Talk Business</h2>

        <br/>

        <div className='footcontact-container'>
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

        <div className='image-container'>
            <img src="https://www.artify.co/storage/sources/51c31c0a-af8c-4e59-bb37-5d954cc288cb_thumb-md.webp"
            style = {{maxWidth: "200px", maxHeight: "200px"}} />
        </div>

        
        
    </div>
  )
}

export default ContactMe
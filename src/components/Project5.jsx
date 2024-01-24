import React from 'react'
import { Link } from 'react-router-dom';

const Project5 = () => {
  return (<>
    <div className='project2-welcome-container'>

        <Link to="/" className='home-link'>Home</Link>

        <br/>

        <h2>Currently Under Construction</h2>

        <br/>
        
        <p>Come back soon to see more information on an HTTP server<br/> made with node, based on a StarWars art gallery.</p>

        <br/>

        <p>In the meantime, you can check out the GitHub repository <a href="https://github.com/saamhynes/Starwars-MultiRoute-HTTP-Server" target="_blank" className='MG-github'>here</a>.</p>
        
            
          
        </div>

            <div className='proj4-foot-container'>

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

export default Project5
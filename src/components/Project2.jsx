import React from 'react'
import { Link } from 'react-router-dom';

const Project2 = () => {
  return (<>
    <div className='project2-welcome-container'>

        <Link to="/" className='home-link'>Home</Link>

        <br/>

        <h2>React Hangman</h2>
        
        <div className='aboutme-para'>

        <p>React Hangman was a fun, yet challening project. It was my first time dipping my toes into the world of Javascript, and React.</p>

        <br/>

        <p>I was also working with a new team, who were great - they were fun and easy to work with. We would all sit down via teams and take turns coding the game.</p>

        <br/>

        <p>I think the most challenging part of this react project was following the logic behind what you were creating. Sometimes there were many different components and it was difficult to keep track of what was going where.</p>

        <br/>

        <p>As beginners, I feel this is a normal part of learning react. As time has gone on, I have gotten better at keeping order within my code and it is easier to navigate between files.</p>

        </div>

        <div className='p2-page-container'>
            <div className='home-page2'>
                <img src={require("./Images/SS1HM.png")} alt="Project Image" className='project2-image' />

                 <img src={require("./Images/SS2HM.png")} alt="Project Image" className='project2-image' />

                {/* <img src={require("./Images/SS3P1.png")} alt="Project Image" className='project1-image' />  */}
            </div>
            
            
        </div>

            <div className='proj2-foot-container'>

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
        </div>

        
            
    </>

        
    
  )
}

export default Project2
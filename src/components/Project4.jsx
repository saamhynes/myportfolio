import React from 'react'
import { Link } from 'react-router-dom';

const Project4 = () => {
  return (<>
    <div className='project2-welcome-container'>

        <Link to="/" className='home-link'>Home</Link>

        <br/>

        <h2>Margo's Garden</h2>
        
        <div className='aboutme-para'>

        <p>Margo's Garden was one of my first projects in Semester 2 of the SD program. Semester 2 was focused on front end development using JavaScript. This project helped work me up to creating the Hangman React App.</p>

        <br/>

        <p>The purpose of Margo's Garden was to prototype a fictional online store. The store sells several different products amongst different categories. The data is separate from its UI representation, which allows us to quickly make changes and allows the store's website to always use the most current inventory information. In a real e-commerce web store, the data would be stored in a database. Which is what I replicated by using javascript objects and arrays. </p>

        <br/>

        <p>The store name, category name, and table header are static. These items are fixed content that does not update or change based on user interactions. Meanwhile, the menu naviagtion, category name and table body are dynamic. Meaning it can be changed and updated based on user interactions.</p>

        <br/>

        <p>At the time I found this project a little challenging. But after completing it, I knew I could recreate this easily.</p>

        <br/>

        <p>It helped me look forward to what was to come in front end development.</p>

        <br/>

        <p>Check out the GitHub repo <a href="https://github.com/saamhynes/FrontEnd-MargosGarden" target="_blank" className='MG-github'>here</a>.</p>

        </div>

        <div className='p2-page-container'>
            <div className='home-page2'>
                <img src={require("./Images/SS2MG2.jpeg")} alt="Project Image" className='project4-image' />

                 <img src={require("./Images/SSMG1.jpeg")} alt="Project Image" className='project4-image' />

            </div>
            
            
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
        </div>

        
            
    </>

        
    
  )
}

export default Project4

import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <>
      <div className='projects-container'>
        <h3>Projects and Designs</h3>
        <br/>
        
        <div className='project-group'>
        <Link to='/project1' className='project-box'>
          <p className='legend'>Web Development</p>
        </Link>

        <Link to='/project2' className='react-box'>
          <p className='legend'>React Hangman</p>
        </Link>

        <Link to='/figma' className='project-box'>
          <p className='legend'>Figma<br/> Designs</p>
        </Link>

        
        </div>

      </div>


      {/* Second row of projects */}
      <div className='projects-container'>
        
        <div className='project-group'>
        <Link to='/project4' className='react-box'>
          <p className='legend'>Front End Margos Garden</p>
        </Link>

        <Link to='/project5' className='project-box'>
          <p className='legend'>Star Wars<br/> HTTP Server</p>
        </Link>

        <Link to='/project6' className='react-box'>
          <p className='legend'>Java Library<br/> Management</p>
        </Link>

        
        </div>

      </div>
    </>
  );
}

export default Projects;

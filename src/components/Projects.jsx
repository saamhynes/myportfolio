import React from 'react'
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { Link } from 'react-router-dom';

const Projects = () => {
  return (<>

    <div className='projects-container'>

        <h3>Projects and Designs</h3>

        <div className='carousel-container'>
          <Carousel showArrows={false} infiniteLoop={true}>
      
        <div>
        <Link to='/project1'>
          <img src={require("./Images/WDSP1.png")} alt="web image" />
          <p className='legend'>Web Development</p>
          </Link>
        </div>
        
      <div>
        <Link to='/project2'>
          <img src={require("./Images/SS1HM.png")} alt="web image" />
        <p className='legend'>React Hangman</p>
        </Link>
      </div>

      <div>
        <Link to='/figma'>
          <img src={require("./Images/FigmaCover.png")} alt="figma designs" />
        <p className='legend'>Figma</p>
        </Link>
      </div>
      </Carousel>
      </div>
      </div>
      </>
      
  )
}

export default Projects
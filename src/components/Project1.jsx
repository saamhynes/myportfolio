import {Link} from 'react-router-dom';

const Project1 = () => {
  return (<>
    <div className='project1-welcome-container'>

        <Link to="/" className='home-link'>Home</Link>

        <br/>

        <h2>My First Sprint</h2>
        
        <br/>

        <p>This was my very first project as a Software Development<br/> student. The project was to create a webpage using HTML,<br/> and CSS. We used a Trello board to organize the project and<br/> bring all of our ideas together. Everyday we had stand up<br/> meetings to discuss what we were working on and how we<br/> were progressing. I was nervous, but excited and everything<br/> went smoothly for our team of three.  </p><br/>

        <p>We based our project on restaurants in the St. John's area. We<br/> chose some boldphotos to bring a pop of colour to our webpage<br/> and kept everything else black and white to keep it fairly neutral.</p><br/>

        <p>I created two pages for the project. One was the 'Home' page, <br/>and the other was the 'Where' page, which showed where you<br/> can eat different cuisines.</p><br/>

        <p>I really enjoyed creating this project. I found myself taking a<br/> lead in planning and coordinating the team. I also learned a lot<br/> about HTML and CSS and how to use them to create a<br/> webpage. </p> <br/>
        
        <p>It was fun, and just the beginning.</p>

        </div>

        <div className='page-container'>
            <div className='home-page'>
                <img src={require("./Images/SS1P1.png")} alt="Project Image" className='project1-image' />

                 <img src={require("./Images/SS2P1.png")} alt="Project Image" className='project1-image' />

                <img src={require("./Images/SS3P1.png")} alt="Project Image" className='project1-image' />
            </div>
            
            <div className='where-page'>
                
                <img src={require("./Images/SS1W1.png")} alt="Project Image" className='project1-image' />

                <img src={require("./Images/SS2W1.png")} alt="Project Image" className='project1-image' />

                <img src={require("./Images/SS3W1.png")} alt="Project Image" className='project1-image' />

                <img src={require("./Images/SS4W1.png")} alt="Project Image" className='project1-image' />
            </div>
            </div>

            <div className='foot-container'>

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

export default Project1
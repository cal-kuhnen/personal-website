import React from 'react';

const Home = () => {
  return (
    	<div className="container">
    		<section id="home">
          <div className="horizontal-container">
            <div id="about">
        			<h3>About Me</h3>
        			<p>Hi! I'm a recent graduate of Illinois Institute of Technology, with a major in computer science and a passion for full stack development. I also like developing platforms for media and have a growing interest in automation and AI, both of which I hope to expand on in my future.</p>
              <h3>Contact Info</h3>
              <div><a className="contact-link" href="mailto:calvinkuhnen@gmail.com" rel="noopener noreferrer" target="_blank">calvinkuhnen@gmail.com</a></div>
              <div><a className="contact-link" href="https://github.com/cal-kuhnen" rel="noopener noreferrer" target="_blank">GitHub</a></div>
              <div><a className="contact-link" href="https://www.linkedin.com/in/calvin-kuhnen-32b8b31a2" rel="noopener noreferrer" target="_blank">LinkedIn</a></div>
            </div>
            <div id="me">
        			<img id="homeImage" src="./pics/profile.jpg"></img>
            </div>
          </div>
    		</section>
    	</div>
  )
}

export default Home

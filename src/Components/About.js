import React from 'react';

const About = () => {

  document.documentElement.style.setProperty('--button', '#289dfc');
  document.documentElement.style.setProperty('--shadow', '#2a86d1');
  document.documentElement.style.setProperty('--button-hover', '#39aefd');

  return (
    	<div className="container">
    		<section id="home">
          <div className="horizontal-container">
            <div id="about">
        			<h3>About Me</h3>
        			<p className="about">Hi! I'm a recent graduate of Illinois Institute of Technology, with a major in computer science. I like developing platforms for media and have a growing interest in automation and AI, both of which I hope to expand on in my future.</p>
              <h3>Contact Info</h3>
              <div className="contact"><a className="contact-link" href="mailto:calvinkuhnen@gmail.com" rel="noopener noreferrer" target="_blank">calvinkuhnen@gmail.com</a></div>
              <div className="contact"><a className="contact-link" href="https://github.com/cal-kuhnen" rel="noopener noreferrer" target="_blank">GitHub</a></div>
              <div className="contact"><a className="contact-link" href="https://www.linkedin.com/in/calvin-kuhnen-32b8b31a2" rel="noopener noreferrer" target="_blank">LinkedIn</a></div>
            </div>
            <div id="me">
        			<img id="homeImage" src="./pics/profile.jpg" alt="me, calvin"></img>
            </div>
          </div>
    		</section>
    	</div>
  )
}

export default About

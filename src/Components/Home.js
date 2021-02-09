import React from 'react';

const Home = () => {
  return (
    	<div className="container">
    		<section id="home">
          <div className="horizontal-container">
            <div id="about">
        			<h2 className="center">About Me</h2>
        			<p>Hi! I'm a recent graduate of Illinois Institute of Technology, with a major in computer science and a passion for front-end design. I also like developing platforms for media and have a growing interest in UX design, somehthing I hope to expand on in my future.</p>
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

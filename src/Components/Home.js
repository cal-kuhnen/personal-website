import React from 'react';

const Home = () => {
  return (
    	<div className="container">
    		<section id="home">
          <div className="horizontal-container">
            <div id="about">
        			<h2 className="center">About Me</h2>
        			<p>Hi! I'm a recent graduate of Illinois Institute of Technology, with a major in computer science.</p>
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

import React from 'react';

const Resume = () => {
  return (
    <div className="content">
  		<a href="Calvin_Kuhnen_Resume.pdf" download>
  		<div id="download">
  			Resume PDF
  		</div>
  		</a>
  		<section id="resume">
  			<h2 className="center">Calvin Kuhnen</h2>
  			<h3 className="center">Chicago IL | calvinkuhnen@gmail.com</h3>
  			<section>
  				<h3>Education</h3>
  					<h4 className="org">Illinois Institute of Technology</h4><h4 className="date">December 2020</h4>
  					<h4>Chicago, Illinois</h4>
  						<p className="info">Bachelor of Science in Computer Science</p>
  							<ul>
  								<li>Dean's List (3x)</li>
  								<li>GPA: 3.6/4.0</li>
  							</ul>
  					<h4 className="org">The Cooper Union</h4><h4 className="date">August 2015 to December 2016</h4>
  					<h4>New York, New York</h4>
  						<p className="info">Mechanical Engineering</p>
  			</section>
  			<section id="experience">
  				<h3>Experience</h3>

  					<h4 className="org">EMP Data Center Corporation</h4><h4 className="date">Feb 2017 to Jul 2018</h4>
  					<h4>Mount Prospect, Illinois</h4>
  						<p className="job">Data Center Operations Associate</p>
  						<ul>
  							<li>Managed maintenance and upkeep of client server systems</li>
  							<li>Provided hands-on assistance for clients</li>
  							<li>Maintained weekly reports for security, maintenance, and other systems</li>
  							<li>As the senior Operations Associate, trained new hires and performed extra duties in the Network Operations Center</li>
  						</ul>

  					<h4 className="org">Cooper Union FSAE Team</h4><h4 className="date">August 2015 to December 2016</h4>
  					<h4>New York, New York</h4>
  						<p className="job">Lead Steering System Designer</p>
  						<ul>
  							<li>Led a team of 4 in designing steering geometry for a student-built race car</li>
  							<li>Primary contributor to CAD modeling</li>
  							<li>Worked closely with other subsystems to organize designs</li>
  							<li>Acted as point of communication between overall team leaders and my team</li>
  						</ul>
  			</section>
  			<section id="skills">
  				<h3>Skills & Interests</h3>
  					<h4>Programming Languages:</h4>
  						<p className="info">Python, C, C++, SQL, R, Javascript</p>
  					<h4>Other Skills:</h4>
  						<p className="info">HTML, CSS, Microsoft Word, Microsoft Excel, Mathematica, Adobe Photoshop, Autodesk Fusion 360, AutoCAD</p>
  					<h4>Interests:</h4>
  						<p className="info">Cycling, Automotive Design, Graphic Design, Music Production, Soccer</p>
  			</section>
  		</section>
  	</div>
  )
}

export default Resume

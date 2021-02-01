import React from 'react';
import '../css/resume.css';

const Resume = () => {
  return (
    <div className="content">
  		<section id="resume">
        <div className='res-container'>
    			<h3 className="centered">Chicago IL | calvinkuhnen@gmail.com</h3>
    			<section>
    				<h3>Education</h3>
            <div>
    					<h4 className="org">Illinois Institute of Technology</h4>
    					<h4 className="right-align">Chicago, Illinois</h4>
            </div>
            <div className="field-time">
    					<p className="info">Bachelor of Science in Computer Science</p>
              <p className="right-align">August 2018 to December 2020</p>
            </div>
    					<ul>
    						<li>Relevant Courses: Calculus | Discrete Structures | Systems Programming |
  Database Organization | Intro to Algorithms | Operating Systems | Software Engineering | Intro to Artificial Intelligence | Mobile App Design | Intro to Information Security</li>
    						<li>GPA: 3.7/4.0</li>
    					</ul>
              <h4 className="org">Oakton Community College</h4>
    					<h4 className="right-align">Des Plaines, Illinois</h4>
            <div className="field-time">
    					<p className="info">Computer Science</p>
              <p className="right-align">June 2017 to July 2018</p>
            </div>
    					<h4 className="org">The Cooper Union</h4>
              <h4 className="right-align">New York, New York</h4>
            <div className="field-time">
              <p className="info">Mechanical Engineering</p>
              <p className="right-align">August 2015 to December 2016</p>
            </div>
    			</section>

    			<section id="experience">
    				<h3>Experience</h3>
    					<div>
                <h4 className="org">EMP Data Center Corporation</h4>
    					  <h4 className="right-align">Mount Prospect, Illinois</h4>
              </div>
              <div className="field-time">
    						<p className="job">Data Center Operations Associate</p>
                <p className="right-align">Feb 2017 to Jul 2018</p>
              </div>
    						<ul>
    							<li>Managed maintenance and upkeep of client server systems</li>
    							<li>Provided hands-on assistance for clients</li>
    							<li>Maintained weekly reports for security, maintenance, and other systems</li>
    							<li>As the senior Operations Associate, trained new hires and performed extra duties in the Network Operations Center</li>
    						</ul>
              <div>
      					<h4 className="org">Cooper Union FSAE Team</h4>
                <h4 className="right-align">New York, New York</h4>
              </div>
              <div className="field-time">
                <p className="job">Lead Steering System Designer</p>
                <p className="right-align">August 2015 to December 2016</p>
              </div>
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
    						<p className="info">Python, Java, C, C++, SQL, R, Javascript</p>
    					<h4>Other Skills:</h4>
    						<p className="info">Git, React, Postgresql, HTML, CSS, Microsoft Word, Microsoft Excel, Mathematica, Adobe Photoshop, Autodesk Fusion 360</p>
    					<h4>Interests:</h4>
    						<p className="info">Cycling, Automotive Design, Graphic Design, Music Production, Soccer</p>
    			</section>
        </div>
  		</section>
  	</div>
  )
}

export default Resume

import React from 'react';
import '../css/resume.css';

const Resume = () => {

  document.documentElement.style.setProperty('--button', '#289dfc');
  document.documentElement.style.setProperty('--shadow', '#2a86d1');
  document.documentElement.style.setProperty('--button-hover', '#39aefd');

  return (
    <div className="container">
  		<section id="resume">
        <div className='res-container'>
    			<section>
    				<h3>Education</h3>
            <div className="org-info">
              <div className="left-col">
      					<h4 className="org">Illinois Institute of Technology</h4>
                <p className="indent">Bachelor of Science in Computer Science</p>
              </div>
              <div className="right-col">
      					<p className="date-loc">Chicago, Illinois</p>
                <p className="date-loc">August 2018 to December 2020</p>
              </div>
            </div>
    				<ul>
    					<li>Relevant Courses: Calculus | Discrete Structures | Systems Programming |
  Database Organization | Intro to Algorithms | Operating Systems | Software Engineering | Intro to Artificial Intelligence | Mobile App Design | Intro to Information Security</li>
    					<li>GPA: 3.7/4.0</li>
    				</ul>
            <div className="org-info">
              <div className="left-col">
                <h4 className="org">Oakton Community College</h4>
      					<p className="indent">Computer Science</p>
              </div>
              <div className="right-col">
                <p className="date-loc">Des Plaines, Illinois</p>
                <p className="date-loc">June 2017 to July 2018</p>
              </div>
            </div>
            <div className="org-info">
              <div className="left-col">
      					<h4 className="org">The Cooper Union</h4>
                <p className="indent">Mechanical Engineering</p>
              </div>
              <div className="right-col">
                <p className="date-loc">New York, New York</p>
                <p className="date-loc">August 2015 to December 2016</p>
              </div>
            </div>
    			</section>

    			<section id="experience">
    				<h3>Experience</h3>
              <div className="org-info">
      					<div className="left-col">
                  <h4 className="org">EMP Data Center Corporation</h4>
      					  <p className="indent">Data Center Operations Associate</p>
                </div>
                <div className="right-col">
                  <p className="date-loc">Mount Prospect, Illinois</p>
                  <p className="date-loc">Feb 2017 to Jul 2018</p>
                </div>
              </div>
    						<ul>
    							<li>Managed maintenance and upkeep of client server systems</li>
    							<li>Provided hands-on assistance for clients</li>
    							<li>Maintained weekly reports for security, maintenance, and other systems</li>
    							<li>As the senior Operations Associate, trained new hires and performed extra duties in the Network Operations Center</li>
    						</ul>
              <div className="org-info">
                <div className="left-col">
        					<h4 className="org">Cooper Union FSAE Team</h4>
                  <p className="indent">Lead Steering System Designer</p>
                </div>
                <div className="right-col">
                  <p>New York, New York</p>
                  <p>August 2015 to December 2016</p>
                </div>
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
    					<h4 className="interests">Programming Languages:</h4>
    						<p className="list">Python, Javascript, Java, C, C++, SQL, R</p>
    					<h4 className="interests">Other Skills:</h4>
    						<p className="list">Git, React, Postgresql, HTML, CSS, Microsoft Word, Microsoft Excel, Mathematica, Adobe Photoshop, Autodesk Fusion 360</p>
    					<h4 className="interests">Interests:</h4>
    						<p className="list">Cycling, Automotive Design, Graphic Design, Music Production, Soccer</p>
    			</section>
        </div>
  		</section>
  	</div>
  )
}

export default Resume

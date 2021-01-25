import React from 'react';
import {
  Link,
  useParams
} from "react-router-dom";
import portfolio from '../portfolio.json';
import '../css/detail.css';

const Detail = () => {

  let { project } = useParams();

  var choice = portfolio.find(item => item.id == project);

  if (choice.style == 'dual') {
    return (
      <DualColumn proj={choice} />
    )
  }
  return (
    <div className='container'>
      <h1>{choice.title}</h1>
      <div>{choice.title}</div>
    </div>
  );
}

// Function to render page in 2-column style
const DualColumn = (item) => {

  let dualStyle = item.proj.detail.map((project) => {
    if (project.align == 'left') {
      return (
        <div className='horizontal-container'>
          <div className='left-right'>
            {project.caption}
          </div>
          <div className='left-right'>
            <img className='dual-image' src={project.image} alt='piece o piss'></img>
          </div>
        </div>
      )
    }
    else if (project.align == 'right') {
      return (
        <div className='horizontal-container'>
          <div className='left-right'>
            <img className='dual-image' src={project.image} alt='piece o piss'></img>
          </div>
          <div className='left-right'>
            {project.caption}
          </div>
        </div>
      )
    }
    })

  return (
    <div className='dual-container'>
      {dualStyle}
    </div>
  )
}

export default Detail

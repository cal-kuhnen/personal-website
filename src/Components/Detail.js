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
  else {
    return (
      <SingleColumn proj={choice} />
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
            <img className='dual-image' src={project.image} alt={project.alt}></img>
          </div>
        </div>
      )
    }
    else if (project.align == 'right') {
      return (
        <div className='horizontal-container'>
          <div className='left-right'>
            <img className='dual-image' src={project.image} alt={project.alt}></img>
          </div>
          <div className='left-right'>
            {project.caption}
          </div>
        </div>
      )
    }
    else if (project.align == 'center') {
      return (
        <div className='offset-container'>
          <div className='left'>
            <img className='left-image' src={project.image} alt={project.alt}></img>
          </div>
          <div className='right'>
            <img className='right-image' src={project.image} alt={project.alt}></img>
          </div>
        </div>
      )
    }
    })

  return (
    <div className='dual-container'>
      <h1 className='top'>{item.proj.title}</h1>
      {dualStyle}
    </div>
  )
}

const SingleColumn = (item) => {

  let singleStyle = item.proj.detail.map((project) => {
    return (
      <div className='vertical-container'>
        <div className='center'>
          <img className='single-image' src={project.image} alt={project.alt}></img>
        </div>
        <div className='text'>
          {project.caption}
        </div>
      </div>
    )
  })

  return (
    <div className='single-container'>
      <h1 className='top'>{item.proj.title}</h1>
      {singleStyle}
    </div>
  )
}

export default Detail

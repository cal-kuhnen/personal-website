import React from 'react';
import { useParams } from "react-router-dom";
import portfolio from '../portfolio.json';
import '../css/detail.css';

const Detail = () => {

  let { project } = useParams();

  var choice = portfolio.find(item => item.id === project);

  if (choice.style === 'dual') {
    return (
      <div className='container'>
        <DualColumn proj={choice} />
      </div>
    )
  }
  else {
    return (
      <SingleColumn proj={choice} />
    )
  }
}

// Function to render page in 2-column style
const DualColumn = (item) => {

  let dualStyle = item.proj.detail.map((project) => {
    if (project.align === 'left') {
      return (
        <div key={project.id} className='horizontal-container'>
          <div className='left left-right'>
            {project.caption}
          </div>
          <div className='right left-right'>
            <img className='dual-image' src={project.image} alt={project.alt}></img>
          </div>
        </div>
      )
    }
    else if (project.align === 'right') {
      return (
        <div key={project.id} className='horizontal-container'>
          <div className='left left-right'>
            <img className='dual-image' src={project.image} alt={project.alt}></img>
          </div>
          <div className='left-right'>
            {project.caption}
          </div>
        </div>
      )
    }
    else if (project.align === 'doubleImg') {
      return (
        <div key={project.id} className='offset-container'>
          <div className='horizontal-container'>
            <div className='left-right'>
              <img className='dual-image' src={project.left} alt={project.leftAlt}></img>
            </div>
            <div className='left-right'>
              <img className='dual-image' src={project.right} alt={project.rightAlt}></img>
            </div>
          </div>
          <div className='center'>
            {project.caption}
          </div>
        </div>
      )
    }
    else if (project.align === 'singleImg') {
      return (
        <div key={project.id} className='offset-container'>
          <div className='vertical-container'>
            <div className='left-right'>
              <img className='single-image' src={project.image} alt={project.alt}></img>
            </div>
          </div>
          <div className='center'>
            {project.caption}
          </div>
        </div>
      )
    }

    return (
      <div>
       Bad object.
      </div>
    )
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

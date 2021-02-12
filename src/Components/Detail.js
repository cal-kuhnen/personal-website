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
    if (project.type === 'left') {
      return (
        <div key={project.id} className='horizontal-container justify-between'>
          <div className='left left-right'>
            {project.caption}
          </div>
          <div className='right left-right'>
            <img className='dual-image' src={project.image} alt={project.alt}></img>
          </div>
        </div>
      )
    }
    else if (project.type === 'title') {
      return (
        <h2 key={project.id} className='subtitle'>{project.title}</h2>
      )
    }
    else if (project.type === 'right') {
      return (
        <div key={project.id} className='horizontal-container justify-between'>
          <div className='left left-right'>
            <img className='dual-image' src={project.image} alt={project.alt}></img>
          </div>
          <div className='left-right'>
            {project.caption}
          </div>
        </div>
      )
    }
    else if (project.type === 'doubleImg') {
      return (
        <div key={project.id} className='offset-container'>
          <div className='horizontal-container justify-around'>
            <div className='left-right'>
              <img className='double' src={project.left} alt={project.leftAlt}></img>
            </div>
            <div className='left-right'>
              <img className='double' src={project.right} alt={project.rightAlt}></img>
            </div>
          </div>
          <div className='center'>
            {project.caption}
          </div>
        </div>
      )
    }
    else if (project.type === 'overlap') {
      return (
        <div key={project.id} className='overlap'>
          <div className='gridImage1'>
            <img className='gridImg' src={project.image1} alt={project.alt1}></img>
          </div>
          <div className='gridCaption1'>
            {project.caption1}
          </div>
          <div className='arrows'>
            <img className='lArrow' src='../pics/arrow-left.png'></img>
            <img className='rArrow' src='../pics/arrow-right.png'></img>
          </div>
          <div className='gridImage2'>
            <img className='gridImg' src={project.image2} alt={project.alt2}></img>
          </div>
          <div className='gridCaption2'>
            {project.caption2}
          </div>
        </div>
      )
    }
    else if (project.type === 'singleImg') {
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
    else if (project.type === 'video') {
      return (
        <div key={project.id} className='offset-container'>
          <div className='vertical-container'>
            <div className='left-right'>
              <video src={project.video} alt={project.alt} controls={project.controls} autoPlay={project.autoplay} loop={project.loop} muted={project.muted}></video>
            </div>
          </div>
          <div className='center'>
            {project.caption}
          </div>
        </div>
      )
    }
    else if (project.type === 'doubleVid') {
      return (
        <div key={project.id} className='offset-container'>
          <div className='horizontal-container justify-around'>
            <div className='left-right'>
              <video className='double' src={project.left} alt={project.leftAlt} controls={project.controls} autoPlay={project.autoplay} loop={project.loop} muted={project.muted}></video>
            </div>
            <div className='left-right'>
              <video className='double' src={project.right} alt={project.rightAlt} controls={project.controls} autoPlay={project.autoplay} loop={project.loop} muted={project.muted}></video>
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

  if (item.proj.hasOwnProperty('link')) {
    return (
      <div className='dual-container'>
        <h1 className='top'><a className='project-link' rel="noopener noreferrer" target="_blank" href={item.proj.link}>{item.proj.title}</a></h1>
        {dualStyle}
      </div>
    )
  }
  else {
    return (
      <div className='dual-container'>
        <h1 className='top'>{item.proj.title}</h1>
        {dualStyle}
      </div>
    )
  }
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

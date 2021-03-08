import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { useParams } from "react-router-dom";
import portfolio from '../portfolio.json';
import '../css/detail.css';

const Detail = () => {

  let { project } = useParams();

  var choice = portfolio.find(item => item.id === project);


  return (
    <div className='container'>
      <Elements proj={choice} />
    </div>
  )
}

// Function to render content in different styles based on json doc property 'type'
const Elements = (item) => {

  document.documentElement.style.setProperty('--backing', item.proj.colors.backing);
  document.documentElement.style.setProperty('--button', item.proj.colors.button);
  document.documentElement.style.setProperty('--shadow', item.proj.colors.shadow);
  document.documentElement.style.setProperty('--button-hover', item.proj.colors.hover);

  let dualStyle = item.proj.detail.map((project) => {

    switch (project.type) {
      case 'left':
        return (
          <div key={project.id} className='horizontal-container justify-between'>
            <div className='column'>
              <div className='left-right'>
                <div dangerouslySetInnerHTML={ {__html: project.caption} } />
              </div>
            </div>
            <div className='column'>
              <div className='left-right'>
                <img className='double' src={project.image} alt={project.alt}></img>
              </div>
            </div>
          </div>
        )
        break;

      case 'title':
        return (
          <h2 key={project.id} className='subtitle'>{project.title}</h2>
        )
        break;

      case 'right':
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
        break;

      case 'doubleImg':
        return (
          <div key={project.id} className='horizontal-container justify-between'>
            <div className='column'>
              <div className='left-right backing center'>
                <img className={project.class} src={project.left} alt={project.leftAlt}></img>
              </div>
              <div className='caption'>
                {project.caption1}
              </div>
            </div>
            <div className='column'>
              <div className='left-right backing center'>
                <img className={project.class} src={project.right} alt={project.rightAlt}></img>
              </div>
              <div className='caption'>
                {project.caption2}
              </div>
            </div>
          </div>
        )
        break;

      case 'code':
        return (
          <div key={project.id} className='offset-container'>
            <SyntaxHighlighter language="assembly" className="code">
              {project.codeSnippet}
            </SyntaxHighlighter>
            <div className='center-caption'>
              {project.caption}
            </div>
          </div>
        )
        break;

      case 'singleImg':
        return (
          <div key={project.id} className='offset-container'>
            <div className='vertical-container'>
              <div className='left-right backing'>
                <img className={project.class} src={project.image} alt={project.alt}></img>
              </div>
            </div>
            <div className='center-caption'>
              {project.caption}
            </div>
          </div>
        )
        break;

      case 'video':
        return (
          <div key={project.id} className='offset-container'>
            <div className='vertical-container'>
              <div className='left-right'>
                <video src={project.video} alt={project.alt} controls={project.controls} autoPlay={project.autoplay} loop={project.loop} muted={project.muted}></video>
              </div>
            </div>
            <div className='center-caption'>
              {project.caption}
            </div>
          </div>
        )
        break;

      case 'doubleVid':
        return (
          <div key={project.id} className='horizontal-container justify-between'>
            <div className='column'>
              <div className='left-right'>
                <video className='double' src={project.left} alt={project.leftAlt} controls={project.controls} autoPlay={project.autoplay} loop={project.loop} muted={project.muted}></video>
              </div>
              <div className='caption'>
                {project.caption1}
              </div>
            </div>
            <div className='column'>
              <div className='left-right'>
                <video className='double' src={project.right} alt={project.rightAlt} controls={project.controls} autoPlay={project.autoplay} loop={project.loop} muted={project.muted}></video>
              </div>
              <div className='caption'>
                {project.caption2}
              </div>
            </div>
          </div>
        )
        break;

      default:
        return (
          <div>
           Bad object.
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

export default Detail

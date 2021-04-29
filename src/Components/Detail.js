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

      /* Renders a caption in left column, image in the right.
      ** ++++++ ++++++
      ** +text+ +img +
      ** ++++++ ++++++
      */
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

      /* Renders a subtitle left aligned on the page.
      ** -- title --
      */
      case 'title':
        return (
          <h2 key={project.id} className='subtitle'>{project.title}</h2>
        )

      /* Renders an image in left column, caption in the right.
      ** ++++++ ++++++
      ** +img + +text +
      ** ++++++ ++++++
      */
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

      /* Renders an image in both columns, with associated captions beneath
      ** each one.
      ** ++++++ ++++++
      ** +img + +img +
      ** ++++++ ++++++
      ** capt.  capt.
      */
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

        /* Renders an image in both columns, with a single caption beneath
        ** ++++++ ++++++
        ** +img + +img +
        ** ++++++ ++++++
        ** -- caption --
        */
        case 'doubleImgOneCap':
          return (
            <>
              <div key={project.id} className='horizontal-container justify-between'>
                <div className='column'>
                  <div className='left-right backing center'>
                    <img className={project.class} src={project.left} alt={project.leftAlt}></img>
                  </div>
                </div>
                <div className='column'>
                  <div className='left-right backing center'>
                    <img className={project.class} src={project.right} alt={project.rightAlt}></img>
                  </div>
                </div>
              </div>
              <div className='width90 center-caption'>
                {project.caption}
              </div>
            </>
          )

      /* Renders a code block with a full width caption beneath.
      ** +++++++++++++
      ** + if(x==y)  +
      ** +++++++++++++
      ** -- caption --
      */
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

      /* Renders a full width image, with a full width caption beneath.
      ** +++++++++++++
      ** +    img    +
      ** +++++++++++++
      ** -- caption --
      */
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

      /* Renders a full width video, with a full width caption beneath.
      ** +++++++++++++
      ** +   video   +
      ** +++++++++++++
      ** -- caption --
      */
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

      /* Renders a video in both columns, with two associated captions beneath.
      ** ++++++ ++++++
      ** +vid + +vid +
      ** ++++++ ++++++
      ** capt.  capt.
      */
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

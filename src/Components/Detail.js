import React from 'react';
import {
  Link,
  useParams
} from "react-router-dom";
import portfolio from '../portfolio.json';

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

  return (
    <div className='dual-container'>
      <div className='horizontal-container'>
        <div className='content'>
          {item.proj.detail.caption01}
        </div>
        <div className='content'>
          <img className='dual-image' src={item.proj.images.img01} alt='piece o piss'></img>
        </div>
      </div>
    </div>
  )
}

export default Detail

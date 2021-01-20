import React from 'react';
import {
  Link,
  useParams
} from "react-router-dom";
import portfolio from '../portfolio.json';

const Detail = () => {

  let { project } = useParams();

  return (
    <div className='container'>
      <h3>{project}</h3>
    </div>
  )
}

export default Detail


import React from 'react';
import './Textos.css'
function Heading(props) {

  return (
  <>
  <h1 id='text'>{props.text}</h1>
          <h1 id='tituls'>{props.titulos}</h1>
          <h1 id='text'>{props.textos}</h1>
          </>

  )
}

export default Heading;

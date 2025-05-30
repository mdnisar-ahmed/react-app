import React from 'react'
import '../../index.css';

import ComponentD from './ComponentD';

function ComponentC(){
  return (
    <div className="box">
        <h1>ComponentC</h1>
        <ComponentD />
    </div>
  )
}

export default ComponentC;
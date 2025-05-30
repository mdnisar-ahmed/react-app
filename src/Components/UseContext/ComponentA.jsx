import React from 'react'
import '../../index.css';
import ComponentB from './ComponentB';

function ComponentA(){
  return (
    <div className="box">
        <h1>ComponentA</h1>
        <ComponentB />
    </div>
  )
}

export default ComponentA;
import React ,{useContext} from 'react'
import '../../index.css';
import {UserContext} from './ComponentA';

import ComponentD from './ComponentD';

function ComponentC(){
  const user= useContext(UserContext);
  return (
    <div className="box">
        <h1>ComponentC</h1>
        <h2 className='box-p'>{`Hello again, ${user}`}</h2>
        <ComponentD  />
    </div>
  )
}

export default ComponentC;
import React, {useContext} from 'react'
import '../../index.css';
import {UserContext} from './ComponentA.jsx';



function ComponentD(){
  const xtz=useContext(UserContext);

  return (
    <div className="box">
        <h1>ComponentD</h1>
        <h2 className="box-p">{`Bye ${xtz}`}</h2>
    </div>
  )
}

export default ComponentD;
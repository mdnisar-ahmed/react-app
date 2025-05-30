import React, {useState,createContext} from 'react'
import '../../index.css';
import ComponentB from './ComponentB';

export const UserContext=createContext();

function ComponentA(){

    const [user,setUser] = useState("Nisar");

  return (
    <div className="box">
        <h1>ComponentA</h1>
        <span className='box-p'>{`Heyyy, ${user}`}</span>
        <UserContext.Provider value={user}>
            <ComponentB/>
        </UserContext.Provider>
    </div>
  )
}

export default ComponentA;
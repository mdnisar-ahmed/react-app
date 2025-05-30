import React from 'react'
import { useNavigate } from 'react-router-dom';

interface Props{
    children:string;
    color?:'primary' | 'secondary' | 'warning';
    onClick:()=>void;
}


const Button = ({children,onClick, color="warning"}:Props) => {

  const navigate=useNavigate();
  const goToCard=()=>{
    navigate('/card');
  }

  return (
    <>
    <button type="button" className={"btn btn-"+color} onClick={onClick}>{children}</button>
    <br />
    <button onClick={goToCard} >Card</button> &nbsp;
    <button onClick={()=>{navigate('/digital-clock')}} >Digital Clock</button> &nbsp;
    <button onClick={()=>navigate('/color-picker')} >ColorPicker</button> &nbsp;
    <button onClick={()=>navigate('/componentA')} >Showing the UseContext How it works</button> &nbsp;
    <button onClick={()=>navigate('/my-component')} >My Component</button> &nbsp;

    
    </>
  )
}

export default Button
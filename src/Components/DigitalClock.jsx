import React, {useState, useEffect} from 'react'
import '../index.css';



function DigitalClock () {
    const [time,setTime]= useState(new Date());

useEffect(()=>{
const intervalValid=setInterval(()=>{setTime(new Date());},1000);

return()=>{
    clearInterval(intervalValid);
}

},[]);

function formatTime(){
    let hours=time.getHours();
    let mins=time.getMinutes();
    let seconds=time.getSeconds();
    const  meridean=hours>=12?'PM':'AM';

    hours=hours%12||12;

    return `${padZero(hours)}:${padZero(mins)}:${padZero(seconds)}:${meridean}`;
}

function padZero(number){
return number<10 ? '0' : '' + number;
}
  return (
   <div className="clock-container">
        <div className='clock'>
            <span> {formatTime()}</span>
        </div>
   </div>
  )
}

export default DigitalClock
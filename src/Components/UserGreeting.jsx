import React from 'react'
import '../index.css';


const UserGreeting = (props) => {

    const welcomeMessage=<h2 className="welcome-message">Welcome {props.username} </h2>
    const loginPrompt=<h2 className="login-message"> Please try to login</h2>
  return (props.isLoggedIn? welcomeMessage: loginPrompt )
}



export default UserGreeting
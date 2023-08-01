import React from "react";
import './SignUp.css';
import './SignIn.jsx';
import instagramLogo from './assets/instgramLogo.png'
import UserPage from "./userChoice";

function Signup(){
   return(
    <>
      <body id='main'>
        {/* create log in page */}
        <div id='loginPage'>
          {/* set instagram logo in page */}
        <img src={instagramLogo} alt="instalogo" />
        {/* create form */}
          <form action="" id='form'>
             {/* create input field for mobile no or email,full name,ysername and password and button for sign up */}
            <input type="text" placeholder="Mobile Number or Email" />
            <input type="text" placeholder="Full Name" />
            <input type="text" placeholder='Phone Number,Username or email' />
            <input type="password" placeholder='Password' />
            <button  id='signUpButton'>Sign up</button>
          </form>
          <p id='footer'>have an account?<span>Log in</span></p>
        </div>
      </body>
    </>
   )
}

export default Signup;
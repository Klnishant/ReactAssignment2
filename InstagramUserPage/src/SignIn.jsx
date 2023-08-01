import { useState } from 'react'
import './SignIn.css'
import './Signup.jsx';
import instagramLogo from './assets/instgramLogo.png'
function App() {


  return (
    <>
      <body id='main'>
        {/* create log in page */}
        <div id='loginPage'>
           {/* set instagram logo in page */}
        <img src={instagramLogo} alt="instalogo" />
         {/* create form */}
          <form action="" id='form'>
             {/* create input field for username and password and button for sign in */}
            <input type="text" placeholder='Phone Number,Username or email' />
            <input type="password" placeholder='Password' />
            <button  id='signInButton'>Sign in</button>
          </form>
          <p id='footer'>Don't have account?<span>Sign up</span></p>
        </div>
      </body>
    </>
  )
}

export default App

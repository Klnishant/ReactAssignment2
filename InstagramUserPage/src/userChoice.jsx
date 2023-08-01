// UserPage.js
import React, { useState } from 'react';
import App from './SignIn.jsx';
import Signup from './Signup.jsx';
import './UserPage.css';
const UserPage = () => {
  //create hooks for change in user choice
  const [activeForm, setActiveForm] = useState("signup");

  //create function to set change in user choice
const toggleForm = (formType) => {
  setActiveForm(formType);
};


  return (
    <>
    <div className="container">
      <div className="form-toggle">
        {/* create button for rendering sign up page */}
        <button onClick={() => toggleForm("signup")}>Sign Up</button>
        {/* create button for rendering sign up page */}
        <button onClick={() => toggleForm("signin")}>Sign In</button>
      </div>
      {/* compare and toggle between sign up and sign in pages */}
      {activeForm === "signup" ? <Signup /> : <App />}
    </div>
    </>
  );
};

export default UserPage;


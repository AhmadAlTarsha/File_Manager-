import React from 'react'
import { useState } from 'react';
import { auth,signInWithEmailAndPassword } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import"../../App.css"

const Login = () => {
const navigate=useNavigate()
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(false);
  const [message, setMessage] = useState("");
  const handelLogin=()=>{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
     localStorage.setItem("uid", user.uid);
   
  
   if (user.uid) {
   navigate("/uplode")}
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    setStatus(true)
    setMessage("invalid login")

    
  });
  }
  
return (
    <div className='login-container' >
    <p >Login:</p>
    
      <br />

      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button
        onClick={(e) => {
         
         handelLogin()

        }}
      >
        Login
      </button>
    
{status
          ? message && <div className="ErrorMessage">{message}</div>
          :null}

  </div>
  )


  };
  

export default Login
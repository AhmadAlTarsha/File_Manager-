import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword,auth} from "../../firebaseConfig"
import"../../App.css"

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(false);

  const handelLogin=()=>{
    if (password==repassword) {
       createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setStatus(true)
    setMessage("Register successfully")
  
  })
  .catch((error) => {
    
    const errorMessage = error.message;
    console.log(errorMessage);
    setStatus(false)
    setMessage(errorMessage)
  });
    }else{
      setMessage("Wrong Password")
    }
   
  }
  
  
  return (
    <div className='register-container' >
    <p >Register:</p>
  
    
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
      <input
        type="password"
        placeholder="Re_Password"
        onChange={(e) => setRePassword(e.target.value)}
      />
      <button
        onClick={(e) => {
        handelLogin()
        }}
      >
        register
      </button>
  
      {status
          ? message && <div className="SuccessMessage">{message}</div>
          : message && <div className="ErrorMessage">{message}</div>}

  </div>
  )
}

export default Register
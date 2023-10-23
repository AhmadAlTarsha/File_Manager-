import React from 'react'
import { useState } from 'react'
import {createUserWithEmailAndPassword,auth} from "../../firebaseConfig"

const Register = () => {
  const [email, setEmail] = useState("");
 
  const [password, setPassword] = useState("");
  const handelLogin=()=>{
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
  }
  
  
  return (
    <div >
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
      <button
        onClick={(e) => {
        handelLogin()
        }}
      >
        register
      </button>
  


  </div>
  )
}

export default Register
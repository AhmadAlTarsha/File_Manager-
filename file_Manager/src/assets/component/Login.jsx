import React from 'react'
import { useState } from 'react';
import { auth,signInWithEmailAndPassword } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
const navigate=useNavigate()
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handelLogin=()=>{
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
     localStorage.setItem("uid", user.uid);
    console.log(user);
   if (user.uid) {
   navigate("/uplode")}
  })
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
    
  });
  }
  
return (
    <div >
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
    


  </div>
  )


  };
  

export default Login
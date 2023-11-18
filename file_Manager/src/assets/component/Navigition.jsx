import React, { useEffect, useState } from 'react'
import"../../App.css"
import {  Link, } from "react-router-dom";

const Navigation = () => {
 

    return (
      <div className='navBar' style={{ display: "flex", gap: "16px" }}>
        
      <Link to="/"> Register </Link>
      <Link to="/login"> Login </Link>
      <Link to="/" onClick={()=>{
          localStorage.clear()

      }}> logout </Link>
     
    </div>
    
    );
  };
  

export default Navigation
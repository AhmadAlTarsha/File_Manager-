import React from 'react'
import { useState } from 'react';
import { storage,ref } from '../../firebaseConfig';
import { uploadBytes } from 'firebase/storage';

const UplodeFile = () => {
const handelUplode=()=>{

const mountainsRef = ref(storage,`images/${file.name}`);
//const mountainImagesRef = ref(storage, );
uploadBytes(mountainsRef).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})
    
}
const [file,setFile]=useState("")
  return (
    <div>
        <h1>Upload File</h1>
        <input type='file'  onChange={(e)=>{
            setFile(e.target.files[0])
        }} ></input>
        <button onClick={()=>{
            console.log(file);
           handelUplode()

        }} >submit</button>
    </div>
  )
}

export default UplodeFile
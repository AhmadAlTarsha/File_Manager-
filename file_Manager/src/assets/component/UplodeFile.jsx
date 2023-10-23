import React, { useEffect } from "react";
import { useState } from "react";
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  getDocs
} from "../../firebaseConfig";
import { collection,where,query } from "firebase/firestore";
import { firestore, addDoc ,} from "../../firebaseConfig";
import { v4 } from "uuid";
import FliePage from "./FliePage";
const UplodeFile = () => {
    const [allData,setAllData]=useState([])
  const handelUplode = async() => {
    const  mountainsRef = await ref(storage, `images/${v4()}`);
    uploadBytes(mountainsRef,file).then(() => {
      getDownloadURL(mountainsRef)
   
        .then((val) => {
          
console.log(val);
          const fileData = {
            url: val,
            imgs: file.name,
            uid:localStorage.getItem("uid")
        
          };
          addFileToFirestore(fileData);
        })
        .catch((error) => {
          console.log(error);
        });
    });
    const addFileToFirestore =  (fileData) => {
      addDoc(collection(firestore, "DB"), fileData)
        .then(async(res) => {
            console.log(res);
//let Data= res.data()
          console.log("File data added to Firestore successfully");
     //console.log(Data);
     const db=  collection(firestore,"DB")
        const getData= await getDocs(db)
       
        let arrayOfData=getData.docs
        setAllData(arrayOfData)
        })
        .catch((error) => {
          console.log("Error adding file data to Firestore:", error);
        });
    };

  };
  const getdata =async  ()=>{
    try{
    
   
    const q = query(collection(firestore,"DB"),  where("uid", "==", localStorage.getItem("uid")));
        const getData= await getDocs(q)
       let arrayOfData=getData.docs
       console.log(arrayOfData);
       setAllData(arrayOfData)
        // getData.forEach((ele)=>{
        //     console.log(ele.data());
        // })  
    } catch(err){
        console.log(err);
    }
   
        
    }

    const [file, setFile] = useState(null);
useEffect(()=>{
   getdata()

},[])
    



  return (
    <div>
        <FliePage allData={allData}/>
      <h1>Upload File</h1>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      ></input>
      <button
        onClick={() => {
          handelUplode();
        }}
      >
        submit
      </button>
    </div>
  );
};

export default UplodeFile;

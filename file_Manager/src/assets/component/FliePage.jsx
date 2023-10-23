import React, { useEffect } from 'react'
import "../../App.css"
import { doc,  deleteDoc} from "firebase/firestore";
import { firestore } from '../../firebaseConfig';
const FliePage = ({allData}) => {
    console.log(allData);
    
   //  console.log(allData);
  
// const deleteFun=async()=>{
// 
// }
//   // 
   
  const allImage=  allData?.map((ele,i)=>{
    console.log(ele.id);
    
       return <div  className='images' ><img key={ele.id} width="200px" height="200px" src={ele.data().url} alt="" /> <button onClick={()=>{
        console.log(ele.id);
        deleteDoc(doc(firestore, "DB", `${ele.id}`));
       }}>delete</button></div>
    }) 


  return (
    <div className='AllImage' >{allImage}</div>
  )
}

export default FliePage
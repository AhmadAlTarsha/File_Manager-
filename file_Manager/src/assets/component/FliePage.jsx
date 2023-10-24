import React, { useEffect } from "react";
import "../../App.css";
import { doc, deleteDoc } from "firebase/firestore";
import { firestore, storage } from "../../firebaseConfig";
import { deleteObject, ref } from "firebase/storage";
const FliePage = ({ allData, getData }) => {
  const deleteFun = async (fileRef) => {
    try {
      await deleteObject(fileRef);
      await getData();
      console.log("File deleted from Firebase Storage successfully");
    } catch (error) {
      console.error("Error deleting file from Firebase Storage:", error);
    }
  };
  const allImage = allData?.map((ele, i) => {
    return (
      <div key={ele.id} className="images">
        <iframe  width="200px" height="200px" src={ele.data().url} />{" "}
        <button
          onClick={() => {
            console.log(ele.id);
            deleteDoc(doc(firestore, "DB", `${ele.id}`)).then(() => {
              const storegDelete = ref(storage, "images/" + ele.data().imgs);
              deleteFun(storegDelete);
            });
          }}
        >
          delete
        </button>
      </div>
    );
  });

  return <div className="AllImage">{allImage}</div>;
};

export default FliePage;




console.log(a);
var a=10
// a( )//=1
// function a(){
// console.log(1);
// }


import React, { useEffect } from "react";
import { useState } from "react";
import"../../App.css"
import {
  storage,
  ref,
  uploadBytes,
  getDownloadURL,
  getDocs,
} from "../../firebaseConfig";
import { collection, where, query } from "firebase/firestore";
import { firestore, addDoc } from "../../firebaseConfig";
import FliePage from "./FliePage";
const UplodeFile = () => {
  const [allData, setAllData] = useState([]);
  const [file, setFile] = useState(null);
  const handelUplode = async () => {
    const mountainsRef = ref(storage, `${localStorage.getItem("uid")}/${file.name}`);
    uploadBytes(mountainsRef, file).then(() => {
      getDownloadURL(mountainsRef)
        .then(async (val) => {
          const fileData = {
            url: val,
            imgs: file.name,
            uid: localStorage.getItem("uid"),
          };
          await addFileToFirestore(fileData);
          await getdata()
        })
        .catch((error) => {
          console.log(error);
        });
    });
    const addFileToFirestore = async (fileData) => {
      await addDoc(collection(firestore, "DB"), fileData)
        .then(async (res) => {
          console.log("File data added to Firestore successfully");
        })
        .catch((error) => {
          console.log("Error adding file data to Firestore:", error);
        });
    };
  };
  const getdata = async () => {
    try {
      const q = query(
        collection(firestore, "DB"),
        where("uid", "==", localStorage.getItem("uid"))
      );
      const getData = await getDocs(q);
      let arrayOfData = getData.docs;
      setAllData(arrayOfData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="upload-file-container">
      <FliePage allData={allData}  getData={getdata} />
      <h1>Upload File</h1>
      <input className="file-input"
        type="file"
        onChange={(e) => {
          e.preventDefault();
          setFile(e.target.files[0]); 
           
        }}
      ></input>
      <button className="upload-button"
        onClick={() => {
          handelUplode();
          disabled={loading}
          
        }}
      >
        submit
      </button>
    </div>
  );
};

export default UplodeFile;

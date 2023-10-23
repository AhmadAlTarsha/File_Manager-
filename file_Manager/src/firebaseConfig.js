import { initializeApp } from "firebase/app";
import { getStorage,ref,uploadBytes ,getDownloadURL} from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword ,signOut,signInWithEmailAndPassword,} from "firebase/auth";
import {getFirestore,addDoc,getDocs} from"firebase/firestore"


//import {getStorage,ref} from"firebase/storage"
const firebaseConfig = {
  apiKey: "AIzaSyDdEzLO-aPqQuQR84XhArt84Ms_ZyhWTlE",
  authDomain: "file-manager-65a32.firebaseapp.com",
  projectId: "file-manager-65a32",
  storageBucket: "file-manager-65a32.appspot.com",
  messagingSenderId: "556472057938",
  appId: "1:556472057938:web:d7109b08b7eb9658301f8b",
  measurementId: "G-BEWZL6HNY4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const firestore = getFirestore(app);



 




 export{
    createUserWithEmailAndPassword,signInWithEmailAndPassword,
    auth,storage,ref,uploadBytes,getDownloadURL,firestore,addDoc,getDocs
  }
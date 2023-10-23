import { useState } from 'react'
import { Route, Routes ,Link} from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import './App.css'
import Register from './assets/component/Register';
import Login from './assets/component/Login';
import Navigation from './assets/component/Navigition';
import { auth } from './firebaseConfig';
import UplodeFile from './assets/component/UplodeFile';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='all_apge' > <h1>File Manager</h1>
    
      <Navigation/>
     <Routes>
      <Route path='/' element ={<Register/>}/>
      <Route path='/login' element ={<Login/>}/>
      <Route path='/uplode' element ={<UplodeFile/>}/>

     </Routes></div>
    
    </>
  )

  
}

export default App

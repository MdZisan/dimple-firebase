import { useState } from 'react'
import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './Firebase/firebase.config';



const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

function App() {
  const [user, setUser]= useState(null);

 const handleGoogleSignIn =()=>{
     signInWithPopup(auth,googleProvider)
     .then(result=>{
       const loggedInUser = result.user; 
       console.log(loggedInUser);
       setUser(loggedInUser);
     })
     .catch(error=> {
      console.log(error);
     })
 }
console.log(user);
  return (
    <div className="App">
     <h1>Firebase + react</h1>
     <div>
      <button onClick={handleGoogleSignIn}>Google signin </button>
     </div>
     {
      user&&
      <div>
        <h2>Name: {user.displayName}</h2>
        <h2>Email: {user.email}</h2>
        <img src={user.photoURL} alt="" />
      </div>
     }

    </div>
  )
}

export default App

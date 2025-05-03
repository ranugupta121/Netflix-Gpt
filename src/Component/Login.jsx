import React, { useRef, useState } from "react";
import Header from "./Header";
import { CheckValidData } from "./Utils/Validation";
import {createUserWithEmailAndPassword } from "firebase/auth";
import {signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "./Utils/firebase"; 
import {  updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "./Utils/UserSlice";
import { BG_URL, User_Avtar } from "./Utils/Constant";



const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [name, setName] = useState(""); 
  const dispatch=useDispatch()

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // Refs for email & password
   let email = useRef(null);
  let password = useRef(null);

  const handleButtonClick = () => {
    let message = CheckValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
  

    //SIGN IN SIGN UP LOGIC
    if(!isSignInForm){
            //SIGN UP LOGIC

   createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    let user = userCredential.user;

          // Profile updated!

    updateProfile(user ,{
      displayName: name,
      photoURL:User_Avtar
    })
    .then(() => {
      const {uid,displayName,email,photoURL}=auth.currentUser
      dispatch(
        addUser({uid:uid,email:email,displayName:displayName,photoURL:User_Avtar})
      )

    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });

    
  })
 .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
    setErrorMessage(errorCode + "-" + errorMessage)
  });

 }
 
 
     
  
     else{
       //SIGN IN LOGIC
       signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
     // Signed in 
     let user = userCredential.user;
     const {uid,displayName,email,photoURL}=auth.currentUser

     dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:User_Avtar})
    )
     // console.log(user)
 
 
     
   })
   .catch((error) => {
     let errorCode = error.code;
     let errorMessage = error.message;
     setErrorMessage(errorCode +"-"+ errorMessage)
   });
 
     }
   };
 
   return (
     
     <div>
       <Header />
       <div className="absolute -z-10">
         <img className="h-screen object-cover md:h-auto"
           src={BG_URL}  alt="Netflix Background"
         />
       </div>
 
       {/* SIGN IN & SIGN UP FORM */}
       <form
         onSubmit={(e) => e.preventDefault()}
         className="absolute w-full md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
       >
         <h1 className="font-bold text-3xl py-2">
           {isSignInForm ? "Sign In" : "Sign Up"}
         </h1>
 
         {/* Name input for Sign Up */}
         {!isSignInForm && (
           <input
             type="text"
             value={name}
             onChange={(e) => setName(e.target.value)}
             placeholder="Enter Your Name"
             className="p-2 my-2 w-full bg-gray-700"
           />
         )}
 
         <input
           type="text"
           ref={email}
           placeholder="Email or mobile number"
           className="p-2 my-2 w-full bg-gray-700"
         />
 
         <input
           type="password"
           ref={password}
           placeholder="Password"
           className="p-2 my-2 w-full bg-gray-700"
         />
 
         {/* Error Message */}
         {errorMessage && (
           <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
         )}
 
         <button className="bg-red-700 w-full p-2 my-4" onClick={handleButtonClick}>
           {isSignInForm ? "Sign In" : "Sign Up"}
         </button>
 
         <p className="py-4 underline cursor-pointer" onClick={toggleSignInForm}>
           {isSignInForm ? "New to Netflix? Sign Up now" : "Already Registered? Sign In now"}
         </p>
       </form>
     </div>
   );
 
 
   

};

export default Login;

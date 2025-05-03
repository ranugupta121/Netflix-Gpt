import React, { useEffect } from 'react';
import {onAuthStateChanged, signOut } from "firebase/auth";
import{auth} from "./Utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from './Utils/UserSlice';
import { LOGO, SUPPORTED_LANGUAGE } from './Utils/Constant';
import { User_Avtar } from './Utils/Constant';
import { toggleGptSearchView } from './Utils/GptSlice';
import { changeLanguage } from './Utils/ConfingSlice';

const Header = () => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const user= useSelector((store)=> store.user)
  const showGptSearch=useSelector((store)=>store.gpt?.showGptSearch)


const handleSignOut=async()=>{
  
    signOut(auth)
    .then(() => {})
  
  
  .catch((error)=> {
    console.log('navigate error')
  navigate('/error') 
 });
}




  useEffect(()=>{
   
    const unsubscribe=onAuthStateChanged(auth,(user) => {
      if (user) {
        // User is signed in, 
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        navigate("/browse")
  
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/")
      }
    });
    //this will be return unsubscribe when component unmount
    return () =>unsubscribe()
  },[dispatch,navigate])

  const handleSearchGpt=()=>{
    // dispatch(toggleGptSearchView(!showGptSearch))
    dispatch(toggleGptSearchView())
  
  }
  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex  flex-col md:flex-row justify-between">
      <img
        className="w-44  mx-auto md:mx-0"
        src={LOGO} alt="logo"
      />
      { user &&(
        <div className='flex p-2 justify-between'>
          {showGptSearch  &&(
            <select name="" id="" className='p-2 bg-gray-900 text-white m-2' onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGE.map((lang) =>(
                 <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
            
           ))}
          </select>

          )}
          
          <button className='py-2 px-4 my-2 mx-4 rounded-lg bg-purple-800 text-white'
          onClick={handleSearchGpt}>
            {showGptSearch ? "HomePage" :"GPT Search"}</button>

            <div className=' flex gap-3 mt-2'>
            <img className='hidden md:block w-10 h-10 background-transparent' src={User_Avtar} alt="" />

            {user &&(
            <button className='text-white bg-red-500 w-15 h-8 px-2 py-1 rounded-md' onClick={handleSignOut}>Sign Out</button>
            )}
            </div>

      </div>
      )
}

      </div>
    

  );
};

export default Header;

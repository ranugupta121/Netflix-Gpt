import React, { useState } from 'react'
import { IoIosPlay } from "react-icons/io";
// import VideoBackground from './VideoBackground';


function VideoTitle({title,overview}) {
  // const[videoTrailer,setVideoTrailer]=useState(false)

  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>

{/* {videoTrailer  && (
  <div className=' top-0 left-0 w-screen aspect-video absolute '>
    <VideoBackground movieId={movieId}/>

    <button className='absolute top-5 right-5 bg-red-600 text-white rounded-full hover:bg-red-800' 
    onClick={()=>setVideoTrailer(false)}> ✖ </button>
  </div>
)} */}

      <h1 className=' text-2xl md:text-4xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>

      {/* button */}
      <div className='flex items-center space-x-4 md:my-0 my-4'>
        <button className='bg-white text-black px-3 md:px-8 md:py-2  py-1 text-lg   rounded-lg  flex items-center hover:bg-opacity-85' >      <IoIosPlay className='mr-2'/>

        Play</button>
        <button className= 'hidden md:flex bg-gray-500 text-black px-8 py-2 text-lg bg-opacity-50 rounded-lg   items center '> 
        More Info</button>
      </div>
      
  

    </div>
  )
}

export default VideoTitle

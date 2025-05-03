import React from 'react'
import {  useParams,useNavigate } from 'react-router-dom'

const MovieTrailerPage = () => {
    const navigate=useNavigate()
    // const location=useLocation()
    // const param=new URLSearchParams(location.search)
    // const trailerUrl=param.get("url")
    const {videoId}=useParams()

    console.log("extract no trailer found")


    if(!videoId){
return <h2 className='text-white text-center mt-10'>No Trailer Found</h2>   
 }

 

  return (
    <div className="p-6 bg-black text-white text-center">
    <h2 className="text-2xl mb-4">Now Playing</h2>
    <iframe
      width="80%"
      height="500"
      src={`https://www.youtube.com/embed/${videoId}`} 

      title="Movie Trailer"
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
    ></iframe>
    <br />
    <button
      onClick={() => navigate(-1)}
      className="mt-4 px-4 py-2 bg-red-600 rounded"
    >
      Go Back
    </button>
  </div>

  )
}

export default MovieTrailerPage

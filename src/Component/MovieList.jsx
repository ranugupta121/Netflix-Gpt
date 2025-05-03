import React, { useState } from 'react'
import MovieCard from './MovieCard'

import { YOUTUBE_API_KEY } from "./Utils/Constant"


function MovieList({title,movies,onMovieClick}){


  const handleMovieClick = async(movie) => {
    const data= await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${movie.title} official trailer&type=video&key=${YOUTUBE_API_KEY}&maxResults=1`
    )

    console.log("Data in a",data)

    const json= await data.json()
    console.log(json)

    if(json.items.length > 0 && json.items[0].id?.videoId){
      const videoId=json.items[0].id.videoId
      const trailerUrl = `https://www.youtube.com/watch?v=${videoId}`
      onMovieClick(trailerUrl)
      // console.log(trailerUrl)
    }
    else{
      console.log("NO Trailer Found")
      onMovieClick(null)
    }

  }

  return (
        <div className='px-6'>

        <h1 className=' text-lg md:text-4xl font-bold py-4 text-white'>{title}</h1>

       <div className='flex overflow-x-scroll'>      
        <div className='flex'>
           {movies?.map((movie) => (
            <div key={movie.id}
             className='cursor-pointer bg-gray-800 p-2'

            onClick={()=>handleMovieClick(movie)}>

            <MovieCard key={movie.id} posterPath={movie.poster_path} />

            {/* <button className='mt-2 px-4 py-2 bg-red-600 text-white rounded-lg'
              onClick={()=>handleMovieClick(movie)}>Watch Trailer
            </button> */}

            </div>

            ))}
         </div>
        </div>
    </div>

  )

}
export default MovieList

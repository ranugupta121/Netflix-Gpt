import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

function MainContainer() {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovie)
    if(!movies) return

    const mainMovie = movies[0]
    // console.log(mainMovie)

    if(!mainMovie) return

    const {original_title, overview, id}= mainMovie
    console.log("movie id",id)

  return (
    <div className='pt-[30%]  bg-black md:pt-0 '>
      <VideoTitle  title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>


    </div>   
  )
}

export default MainContainer

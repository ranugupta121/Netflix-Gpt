// import React from 'react'
import useMovieTrailer from './Hooks/useMovieTrailer'
import useNowPlayingMovie from './Hooks/useNowPlayingMovie'
import usePopularMovie from './Hooks/usePopularMovie'
import useUpComingMovie from  './Hooks/useUpComingMovie'
import useTrendingMovie from './Hooks/useTrendingMovie'
// import showGptSearch from './Utils/GptSlice'
import GptSearch from './GptSearch'
import  MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer';

import { useSelector } from 'react-redux'
import Header from './Header'
// import { useParams } from 'react-router-dom'
// import MovieTrailerPage from './Utils/MovieTrailerPage'

const Browse = () => {
  const showGptSearched=useSelector((store)=>store.gpt?.showGptSearch)
  // const {videoId}=useParams()
  // if(videoId){
  //   return <MovieTrailerPage/>
  // }

  useNowPlayingMovie();
  useMovieTrailer();
  usePopularMovie();
  useUpComingMovie();
  useTrendingMovie();

  console.log("showGptSearched value is",showGptSearched)
  return (
    <div>
      <Header/>
      {showGptSearched ?(
      <GptSearch/>
      ):(
      <>
      <MainContainer/>
      <SecondaryContainer/> 
      </>
      )}
    </div>
  )
}

export default Browse


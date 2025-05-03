import React from 'react'
import { IMG_CDN_URL } from './Utils/Constant'

function MovieCard({ posterPath }) {
  if(!posterPath) return null
  return (
    <div className='w-36 md:w-48 pr-4'>
      <img src={IMG_CDN_URL + posterPath} alt="Movie Poster" />
    </div>
  )
}

export default MovieCard

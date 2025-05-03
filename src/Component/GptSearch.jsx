import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from './Utils/Constant'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className='h-screen object-cover md:h-full' src={BG_URL} alt="" />
      </div>
      <div>
      <GptSearchBar/>
      <GptMovieSuggestion/>

      </div>
        </>
  )
}

export default GptSearch

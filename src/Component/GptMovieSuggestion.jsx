import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const GptMovieSuggestion = () => {
  const { movieResult,movieNames,onMovieClick}=useSelector((store)=>store.gpt)
  const[trailer,setTrailer]=useState(null)
  const navigate =useNavigate()

 
  // console.log("aaaaa",movieResult)
  // console.log("adcd",movieNames)
  
  if(!movieNames) return null 

  const handleTrailer=(trailerUrl)=>{
    if(!trailerUrl){
      setTrailer(null)
      console.log("NO Trailer found")
      return
    }
    console.log("TRAILER URL",trailerUrl)


    let videoId =null
    try{
      if(trailerUrl.includes('youtube/')){
        videoId=trailerUrl.split('youtube/')[1].split('?')[0]
      }
      else if(trailerUrl.includes("watch?v=")){
        const urlParams= new URLSearchParams(new URL(trailerUrl).search)
       videoId=urlParams.get('v')
      }
      else if(trailerUrl.includes('/embed/')){
        videoId=trailerUrl.split('/embed/')[1].split('?')[0]
      }



      }
      catch(error){
        console.log("error passing trailerurl",error)

      
    }
   

if(videoId){
  console.log("Extract video id",videoId)

  setTrailer(`https://www.youtube.com/embed/${videoId}`);
  navigate(`/trailer/${videoId}`)

}
else{
  console.log("no trailer video found")
}
}
    // const embeddedUrl=trailerUrl.replace("watch?v=", "embed/")
    // setTrailer(embeddedUrl)
    // navigate(`/trailer?url=${encodeURLComponent(embeddedUrl)}`)
    // navigate(`/trailer${videoId}=${encodeURIComponent(embeddedUrl)}`)


  

  return (
  <div className='p-4 m-4 bg-opacity-85 text-white'>
    <div>
      {movieNames.map((movieName,index)=>(

          <MovieList  
          key={movieName} 
          title={movieName} 
          movies={movieResult[index]}
          onMovieClick={handleTrailer}/>


      ))}
      </div>


  </div>
  )
  
}

export default GptMovieSuggestion

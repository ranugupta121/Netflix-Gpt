import { useDispatch } from "react-redux"
import { API_OPTION } from "../Utils/Constant"
import { addTrailerVideo } from "../Utils/MovieSlice"
import { useEffect } from "react"

const useMovieTrailer=(movieId)=>{

      const dispatch = useDispatch()

    
      //fetch trailer video && updating the store with trailer video
    
      const getMovieVideo= async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', API_OPTION);

         const json =await data.json()

        if(json.results && Array.isArray(json.results)){
            const  filterData =json.results.filter((video) =>video.type==="Trailer")
            const trailer= filterData.length ? filterData[0] :json.results[0]
            dispatch(addTrailerVideo(trailer))
    
        }
        else{
            console.error("No video results found or invalid API response:", json);

        }
    
      }
    
      useEffect(()=>{
        if(movieId){
          getMovieVideo()

        }
        else{
          // console.log("movie id is missing")
        }
      },[dispatch,movieId])
    
  
}
export  default useMovieTrailer
import { useDispatch } from "react-redux"
import { API_OPTION } from "../Utils/Constant"
import { addUpComingMovie } from "../Utils/MovieSlice"
import { useEffect } from "react"

const useUpComingMovie=()=>{
    const dispatch=useDispatch()

    const getUpComingMovie=async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1',API_OPTION)
        const json= await data.json()
        console.log(json.results)
        dispatch(addUpComingMovie(json.results))
    }

    useEffect(()=>{
        getUpComingMovie()
    },[])
}
export default useUpComingMovie
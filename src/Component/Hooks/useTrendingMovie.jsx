import { useDispatch } from "react-redux"
import { API_OPTION } from "../Utils/Constant"
import { addTrendingMovie } from "../Utils/MovieSlice"
import { useEffect } from "react"

const   useTrendingMovie=()=>{
    const dispatch = useDispatch()


const getTrendingMovie = async () =>{
const data=await fetch ("https://api.themoviedb.org/3/movie/top_rated?page=1",API_OPTION)
console.log(data)
const json= await data.json()
console.log(json.results)
 dispatch(addTrendingMovie(json.results))
}

useEffect(() =>{
    getTrendingMovie()
},[])
}
export default useTrendingMovie



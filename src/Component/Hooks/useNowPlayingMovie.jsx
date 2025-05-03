import { useDispatch} from 'react-redux';
import { addNowPlayingMovie } from '../Utils/MovieSlice';
import { useEffect } from 'react';
import { API_OPTION } from '../Utils/Constant';

const useNowPlayingMovie = () => {
  // const nowPlayingMovie=useSelector((store)=>store.movies.nowPlayingMovie)
  const dispatch = useDispatch();
  

  // Fetch data from the TMDB API and update the Redux store
  const getNowPlayingMovie = async () => {
try{
  const data = await fetch(
    'https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION
  );

  const json = await data.json();
  console.log(json.results);
  
        // Dispatch the fetched movies to Redux

  dispatch(addNowPlayingMovie(json.results));


}
catch(error){
  console.log("throw an a error",error)

}

    
  };

  useEffect(() => {
      getNowPlayingMovie();
  }, [dispatch]); 

};

export default useNowPlayingMovie;


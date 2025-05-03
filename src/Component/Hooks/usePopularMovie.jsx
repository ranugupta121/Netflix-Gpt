import { useDispatch} from 'react-redux';
import { addPopularMovie } from '../Utils/MovieSlice';
import { useEffect } from 'react';
import { API_OPTION } from '../Utils/Constant';

const usePopularMovie = () => {
  const dispatch = useDispatch();
  

  // Fetch data from the TMDB API and update the Redux store
  const getPopularMovie = async () => {

      const data = await fetch(
        'https://api.themoviedb.org/3/movie/popular?page=1', API_OPTION

      );

      const json = await data.json();
      console.log(json.results);

      // Dispatch the fetched movies to Redux
      dispatch(addPopularMovie(json.results));

    
  };

  useEffect(() => {
  getPopularMovie();
  }, [dispatch]); 

};

export default usePopularMovie;


import { useEffect, useState } from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';

function SecondaryContainer() {

  const movies = useSelector((store) => store.movies)
  const [movieList, setMovieList] = useState([])
  useEffect(() => {
    // console.log(movies, "movies")
    // console.log(movies?.nowPlayingMovie, "bb")
    setMovieList(movies)

  }, [movies])




  return (
    movieList && (
      <div className='bg-black'>
        <div className='mt-0 md:-mt-34 pl-4 md:pl-12 relative z-20 '>
          <MovieList title={"Now Playing"} movies={movieList.nowPlayingMovie} />
          <MovieList title={"Popular"} movies={movieList.popularMovie} />
          <MovieList title={"Trending"} movies={movieList.trendingMovie} />
          <MovieList title={"Up Coming Movies"} movies={movieList.upcomingMovie} />
          <MovieList title={"Horror Movies"} movies={movieList.nowPlayingMovie} />
        </div>
      </div>
    )
  );
}

export default SecondaryContainer;

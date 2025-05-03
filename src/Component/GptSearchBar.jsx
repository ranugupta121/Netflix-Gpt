// import React, { useRef, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import lang from './Utils/LanguageConstant'
// import openai from './Utils/Openai'
// import { API_OPTION } from './Utils/Constant'
// import { addGptMovieResults } from './Utils/GptSlice'
// // import { parsePromiseDef } from 'openai/src/_vendor/zod-to-json-schema/index.js'

// const GptSearchBar = () => {
//   const dispatch=useDispatch()


//   const langKey = useSelector((store)=>store.config?.lang)
//   const searchText=useRef(null)

//     //SEARCH MOVIE IN TMDB
//     const SearchMovieTMDB=async(movie)=>{
//       const data= await  fetch('https://api.themoviedb.org/3/search/movie?query=' + movie +'&include_adult=false&language=en-US&page=1', API_OPTION)


//       const json=await data.json()
//        return json.results

//     }

//     const handelTMDBSearchClick = async() => {
//       if(!searchText.current?.value){
//         console.log("please enter a movie query")
//         return
//       }
//       console.log(searchText.current?.value)

//       //MAKE An API CALL to GPT API AND GET MOVIE RESULT

//       // const gptQuery =  "Act as a movie recommendation system a  suggest some movie for the qurey .." + searchText.current.value + "only give me name of 5 movie, comma seprated like the example result given ahead.Example Result:Gadar,Sholay,Don, Golmaal,Hum saath saath hai";
       

//        try{
//         const TMDBResult = await openai.chat.completions.create({
//           messages: [{ role: 'user', content: gptQuery }],
//           model: 'gpt-3.5-turbo',
//         });

      

//         if(!gptResults.choices){  //TODO WRITE ERROR HANDLING
//           console.log("No movie suggestion found please try again")

//         }
//         console.log(gptResults.choices?.[0]?.message?.content)

//         const gptMovies= gptResults.choices?.[0]?.message?.content.split(',')

//         // ["Andaz Apna Apna","Herra Phery","golmal","Don","chupke chupke"]


//       const PromiseArray= gptMovies.map((movie) => SearchMovieTMDB(movie))

//       const tmdbResult = await Promise.all(PromiseArray)
//       console.log('tmdbResult Result is',tmdbResult)

//       dispatch(addGptMovieResults({movieNames:gptMovies,movieResult:tmdbResult}))
//     } 
//     catch (error) {
//       console.error("Error fetching movie suggestions:", error);
//     }
  
    
//   }
//   return (
//     <div className='pt-[12%] flex justify-center'>
//       <form className='w-1/2 bg-black grid grid-cols-12 ' onSubmit={(e)=>e.preventDefault()}>

//         <input type="text" className='p-2 m-3 col-span-9'  ref={searchText} placeholder={lang[langKey].gptSearchPlaceholder}/>

//         <button className='py-2 px-4 bg-red-600 text-white col-span-3 m-3' onClick={handelTMDBSearchClick}>
//             {lang[langKey].search}
//         </button>
//       </form>
//     </div>
//   )
// }

// export default GptSearchBar

import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "./Utils/LanguageConstant";
import { API_OPTION } from "./Utils/Constant";
import { addGptMovieResults, toggleGptSearchView} from "./Utils/GptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  // const movieList=useSelector((store)=>store.gpt.movieList)
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);

  
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTION
    );

    const json = await response.json();
    console.log("tmdb  api movie response",json)
    return json.results; 
  
  } 



  const handleTMDBSearchClick = async () => {
    if (!searchText.current?.value) {
      console.log("Please enter a movie query");
      // dispatch(toggleGptSearchView());
      return;
    }
    console.log("Searching for movie:", searchText.current.value);
    // dispatch(toggleGptSearchView());


    try {
      const tmdbResult = await searchMovieTMDB(searchText.current.value);

      if (!tmdbResult || tmdbResult.length === 0) {
        console.log("No movie found, please try another search.");
        // dispatch(toggleGptSearchView())
        return;
      }

      dispatch(
        addGptMovieResults({
          movieNames: [searchText.current.value], 
          movieResult: [tmdbResult],
        })

      );
      dispatch(toggleGptSearchView(true));

    } catch (error) {
      console.log("Error fetching movie from TMDB:", error);
    }
  }

  

  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-2 m-3 col-span-9"
          ref={searchText}
          placeholder={lang[langKey].gptSearchPlaceholder}
        />

        <button
          className="py-2 px-4 bg-red-600 text-white col-span-3 m-3"
          onClick={handleTMDBSearchClick} 
        >
          {lang[langKey].search}
        </button>

      </form>
    </div>
  );
};

export default GptSearchBar



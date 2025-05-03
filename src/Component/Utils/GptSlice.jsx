import { createSlice } from "@reduxjs/toolkit"

const GptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:[],
        movieResult:[],
    
    },
    reducers:{
        toggleGptSearchView:(state,action)=>{
            if(action.payload !==undefined){
                state.showGptSearch=action.payload

            }
            else{
            state.showGptSearch = !state.showGptSearch
            }

        },
    
    addGptMovieResults:(state,action)=>{
        const{movieNames,movieResult,onMovieClick} = action.payload
        state.movieNames = movieNames;
        state.movieResult = movieResult

    }
}
})
export const {toggleGptSearchView,addGptMovieResults} = GptSlice.actions
export default GptSlice.reducer
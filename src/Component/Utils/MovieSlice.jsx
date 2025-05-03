import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovie:[],
        trailerVideo:null,
        popularMovie:[],
        trendingMovie:[],
        upcomingMovie:[],
        // watchMovie:null
    },
    reducers:{
        addNowPlayingMovie:(state,action)=>{
            state.nowPlayingMovie=action.payload
        },
        addPopularMovie:(state,action)=>{
            state.popularMovie=action.payload

        },
        addTrendingMovie:(state,action)=>{
            state.trendingMovie = action.payload

        },
        addUpComingMovie:(state,action)=>{
            state.upcomingMovie=action.payload

        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload

        }
        // addVideoPlaying:(state,action)=>{
        //     state.watchMovie=action.payload

        // }
    },
})
export const{addNowPlayingMovie,addTrailerVideo,addPopularMovie,addTrendingMovie,addUpComingMovie}=movieSlice.actions
export default movieSlice.reducer
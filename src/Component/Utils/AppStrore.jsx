import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice'
import moviesReducer from './MovieSlice'
import gptReducer from './GptSlice'
import confingReducer from './ConfingSlice'

const AppStore=configureStore(
    {
        reducer:{
            user:userReducer,
            movies:moviesReducer,
            gpt:gptReducer,
            config:confingReducer,
        },
    }
)
export default  AppStore;
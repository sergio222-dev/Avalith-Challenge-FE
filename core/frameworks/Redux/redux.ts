import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../../adapters/Redux/Movies/Movies'

const store = configureStore({
    reducer: {
        movies: movieReducer,
    },
});

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from '../../adapters/Redux/Movies/Movies';
import movieReducer from '../../adapters/Redux/Movie/Movie';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
    },
});

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
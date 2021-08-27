import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '@adapters/Redux/Movie/Movie';
import moviesReducer from '@adapters/Redux/Movies/Movies';
import searchReducer from '@adapters/Redux/Search/Search';

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        movie: movieReducer,
        search: searchReducer,
    },
});

export type Rootstate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;
import { PopularMovieResults } from './../../../useCases/Axios/MovieApi';
import { createSlice } from '@reduxjs/toolkit';
import { fetchPopulars } from './Thunks';

export interface MoviesState {
    movies: Array<PopularMovieResults>;
    isLoading: boolean;
}

//TODO implements with generic
export interface MovieReducer {
}

const initialState: MoviesState = {
    movies: [],
    isLoading: false,
};

export const movieSlice = createSlice({
    name: 'Movies',
    initialState,
    reducers: {
        popularsLoading: (state) => {
            state.isLoading = true;
        },
        doneLoading: (state) => {
            state.isLoading = false;
        }
    },
    extraReducers: {
        [fetchPopulars.fulfilled.type]: (state, action) => {
            console.log('action', action);
            state.movies = action.payload;
        }
    }
});

export const { popularsLoading, doneLoading } = movieSlice.actions;

export default movieSlice.reducer;
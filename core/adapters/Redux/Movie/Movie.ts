import { fetchTrailer } from './Thunks';
import { fetchMovie } from 'core/adapters/Redux/Movie/Thunks';
import { createSlice } from '@reduxjs/toolkit';
import { MovieDetails } from "core/useCases/Axios/MovieApi";

export interface MovieState {
    movie: MovieDetails;
    trailerUrl: string;
    isLoading: boolean;
}

const initialState: MovieState = {
    movie: {
        backdrop_path: '',
        popularity: 0,
        title: '',
        video: false,
        vote_average: 0,
        vote_count: 0,
        overview: '',
        poster_path: '',
    },
    trailerUrl: '',
    isLoading: true,
}

export const movieSlice = createSlice({
    name: 'Movie',
    initialState,
    reducers: {
        movieLoading: (state) => {
            state.isLoading = true;
        },
        doneLoading(state) {
            state.isLoading = false;
        }
    },
    extraReducers: {
        [fetchMovie.fulfilled.type]: (state, action) => {
            state.movie = action.payload;
        },
        [fetchTrailer.fulfilled.type]: (state, action) => {
            state.trailerUrl = action.payload;
        }
    }
});

export const { movieLoading, doneLoading } = movieSlice.actions;

export default movieSlice.reducer;
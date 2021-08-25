import { MovieDetails, MovieVideo } from './../../../useCases/Axios/MovieApi';
import { MovieIteractor } from './../../../useCases/MovieIteractor';
import { createAsyncThunk } from "@reduxjs/toolkit";
import { doneLoading, movieLoading } from "./Movie";

export const fetchMovie = createAsyncThunk<MovieDetails, number>(
    'movie/fetchMovie',
    async (iIdMovie, { dispatch }) => {
        dispatch(movieLoading());
        const oMoviesIteractor = new MovieIteractor();
        const movie = await oMoviesIteractor.getMovie(iIdMovie);
        dispatch(doneLoading());
        return movie;
    }
)

export const fetchTrailer = createAsyncThunk<string, number>(
    'movie/fetchTrailer',
    async (iIdMovie, { dispatch }) => {
        dispatch(movieLoading());
        const oMoviesIteractor = new MovieIteractor();
        const sYoutubeTrailerUrl = await oMoviesIteractor.getTrailer(iIdMovie);
        dispatch(doneLoading);
        return sYoutubeTrailerUrl;
    }
)
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MovieIteractor } from './../../../useCases/MovieIteractor';
import { doneLoading, popularsLoading } from './Movies';

export const fetchPopulars = createAsyncThunk(
    'movies/fetchPopulars',
    async(_, { dispatch }) => {
        dispatch(popularsLoading());
        const oMoviesIteractor = new MovieIteractor();
        const movies = await oMoviesIteractor.getPopulars();
        dispatch(doneLoading());
        return movies;
    }
)
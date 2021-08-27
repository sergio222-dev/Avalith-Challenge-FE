import { SearchDetails } from '@useCases/Axios/MovieApi';
import { initialState as initialStateSearch } from './Search';
import { MovieIteractor } from './../../../useCases/MovieIteractor';
import { AsyncThunk, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchSearch = createAsyncThunk<SearchDetails, string>(
    'search/fetchSearch',
    async ( text, {}) => {
        if(text === '') return initialStateSearch;
        const oMoviesIteractor = new MovieIteractor();
        const oSearch = await oMoviesIteractor.getSearch(text, 1);
        return oSearch;
    }
);

export const fetchPage: AsyncThunk<SearchDetails, {text: string, page: number}, {state: SearchDetails}> = createAsyncThunk<SearchDetails, {text: string, page: number}, {state: SearchDetails}>(
    'search/fetchPage',
    async ({text, page}, { getState }) => {
        const oMoviesIteractor = new MovieIteractor();
        const oSearch = await oMoviesIteractor.getSearch(text, page);
        console.log(oSearch);
        return oSearch;
    }
);
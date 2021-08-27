import { fetchSearch, fetchPage } from './Thunk';
import { createSlice } from "@reduxjs/toolkit"
import { SearchDetails } from "@useCases/Axios/MovieApi";

interface SearchState extends SearchDetails {
    text: string;
}

export const initialState: SearchState = {
    text: "",
    results: [],
    page: 0,
    total_pages: 0,
    total_results: 0,
}

export const searchSlice = createSlice({
    name: "Search",
    initialState,
    reducers: {
        cleanSearch(state) {
            state.text = '';
        }
    },
    extraReducers: {
        [fetchSearch.fulfilled.type]: (state, action) => {
            const { page, results, total_pages, total_results, text }: SearchDetails = action.payload;
            state.page = page;
            state.results = results;
            state.total_pages = total_pages;
            state.total_results = total_results;
            state.text = text;
        },
        [fetchPage.fulfilled.type]: (state, action) => {
            const { page, results, total_pages, total_results, text }: SearchDetails = action.payload;
            state.page = page;
            state.results = results;
            state.total_pages = total_pages;
            state.total_results = total_results;
            state.text = text;
        },
    }
});

export const { cleanSearch } = searchSlice.actions;

export default searchSlice.reducer;
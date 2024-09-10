import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchQuery: "",
    language: "",
    isSearching: false,
    searchError: "",
    perPage: 100,
    currentPage: 1,
    results: null
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        searchStart: (state, action) => {
            state.isSearching = true;
            state.searchError = "";
            state.searchQuery = action.payload.searchQuery;
            state.language = action.payload.language;
            state.perPage = action.payload.perPage;
            state.currentPage = action.payload.currentPage;
            state.results = null;
        },
        searchError: (state, action) => {
            state.isSearching = false;
            state.searchError = action.payload;
        },
        searchDone: (state, action) => {
            state.isSearching = false;
            state.results = action.payload;
        }
    }
});

export const { searchStart, searchError, searchDone } = searchSlice.actions;
export default searchSlice.reducer;
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    userName: "",
    repoName: "",
    isLoading: false,
    loadError: "",
    results: null
}

export const repoSlice = createSlice({
    name: "repo",
    initialState,
    reducers: {
        loadRepoStart: (state, action) => {
            state.isLoading = true;
            state.loadError = "";
            state.userName = action.payload.userName;
            state.repoName = action.payload.repoName;
            state.results = null;
        },
        loadRepoError: (state, action) => {
            state.isLoading = false;
            state.loadError = action.payload;
        },
        loadRepoDone: (state, action) => {
            state.isLoading = false;
            state.results = action.payload;
        }
    }
});

export const { loadRepoStart, loadRepoError, loadRepoDone } = repoSlice.actions;
export default repoSlice.reducer;
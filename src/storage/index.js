import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import repoReducer from "./repoSlice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        repo: repoReducer
    }
})
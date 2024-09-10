import axios from "axios";
import { searchDone, searchError, searchStart } from "../storage/searchSlice";
import { GITHUB_TOKEN } from "../../global";
import { clearRepo } from "../storage/repoSlice";

export function searchAction(searchQuery, language, currentPage, perPage) {
    console.log(">searchAction", {searchQuery, language, currentPage, perPage});
    return async (dispatch) => {
        try {
            dispatch(searchStart({searchQuery, language, perPage, currentPage}));
            dispatch(clearRepo());

            if (searchQuery == "") {
                searchQuery = "stars:%3E0";
            }
            if (language.length > 0) {
                searchQuery = searchQuery + " language:" + language;
            }
            
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            });
        
            dispatch(searchDone(response.data));
        } catch (e) {
            dispatch(searchError(e.response?.data?.message ? e.response?.data?.message : e.toString()));
        }
    }
}
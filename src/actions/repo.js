import axios from "axios";
import { loadRepoDone, loadRepoError, loadRepoStart } from "../storage/repoSlice"

export function repoAction(userName, repoName) {
    return async (dispatch) => {
        try {
            dispatch(loadRepoStart({ userName, repoName }));

            const response = await axios.get(`https://api.github.com/repos/${userName}/${repoName}`, {
                headers: {
                    Authorization: `token ${GITHUB_TOKEN}`
                }
            });

            dispatch(loadRepoDone(response.data));
        } catch (e) {
            dispatch(loadRepoError(e.response?.data?.message ? e.response?.data?.message : e.toString()));
        }
    }
}
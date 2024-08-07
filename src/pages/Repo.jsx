import { useParams } from "react-router-dom"

export function Repo() {

    const {user, repo} = useParams();

    return (
        <div>
            Repo, user: {user}, repo: {repo}
        </div>
    )
}
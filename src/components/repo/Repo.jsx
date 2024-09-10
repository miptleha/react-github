import { Alert, Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./Repo.scss";
import { useState } from "react";

export function Repo() {
    const repo = useSelector(s => s.repo.results);
    const errorText = useSelector(s => s.repo.loadError);
    const [showError, setShowError] = useState(true);

    if (!repo) {
        return (
            <>
                {showError && errorText ? (
                    <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                        {errorText}
                    </Alert>
                ) : undefined}
            </>);
    }

    return (
        <div className="repo">
            <img src={repo.owner.avatar_url} className="repo-img figure-img img-fluid border rounded" alt="..." />

            <Table bordered>
                <tbody>
                    <tr>
                        <td>Owner</td>
                        <td>{repo.owner.login}</td>
                    </tr>
                    <tr>
                        <td>Repo</td>
                        <td>{repo.name}</td>
                    </tr>
                    <tr>
                        <td>Desc</td>
                        <td>{repo.description}</td>
                    </tr>
                    <tr>
                        <td>Language</td>
                        <td>{repo.language}</td>
                    </tr>
                    <tr>
                        <td>Updated</td>
                        <td>{new Date(repo.updated_at.slice(0, -1)).toLocaleDateString()}</td>
                    </tr>
                    <tr>
                        <td>Stars</td>
                        <td>{repo.stargazers_count}</td>
                    </tr>
                    <tr>
                        <td>Topics</td>
                        <td>{repo.topics.reduce((a, v) => (
                            a.length === 0 ? v : a + ", " + v
                        ), "")}</td>
                    </tr>
                    <tr>
                        <td>Link</td>
                        <td><a target="_blank" href={repo.html_url}>{repo.html_url}</a></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}
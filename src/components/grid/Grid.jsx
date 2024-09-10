import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { GridRow } from "./row/GridRow";
import "./Grid.scss";

export function Grid() {
    const results = useSelector(s => s.search.results);

    return (
        <div className="grid">
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Description</th>
                        <th>Language</th>
                        <th>Stars</th>
                        <th>Updated</th>
                        <th>Topics</th>
                    </tr>
                </thead>
                <tbody>
                    {results && results.items.map((i, n) => (<GridRow key={n} i={i} n={n} />))}
                </tbody>
            </Table>
        </div>
    )
}
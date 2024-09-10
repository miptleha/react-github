import { Col, Container, Row } from "react-bootstrap";
import { Search } from "./search/Search";
import { Repo } from "./repo/Repo";
import { Grid } from "./grid/Grid";
import { useSelector } from "react-redux";
import { Await } from "./await/Await";

export function Main() {
    const isSearching = useSelector(s => s.search.isSearching);

    return (
        <Container fluid>
            <Search />
            {isSearching ?
                <Await /> :
                (
                    <Row>
                        <Col lg={9}>
                            <Grid />
                        </Col>
                        <Col lg={3}>
                            <Repo />
                        </Col>
                    </Row>
                )}
        </Container>
    )
}
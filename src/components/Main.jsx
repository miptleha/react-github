import { Col, Container, Row } from "react-bootstrap";
import { Search } from "./search/Search";
import { Repo } from "./repo/Repo";
import { Grid } from "./grid/Grid";

export function Main() {
    return (
        <Container fluid>
            <Search />
            <Row>
                <Col lg={9}>
                    <Grid />
                </Col>
                <Col lg={3}>
                    <Repo />
                </Col>
            </Row>
        </Container>
    )
}
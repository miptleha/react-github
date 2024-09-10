import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { searchAction } from "../../actions/search";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export function Search() {
    const dispatch = useDispatch();
    const errorText = useSelector(s => s.search.searchError);
    const [showError, setShowError] = useState(true);

    const onFormSubmit = e => {
        console.log("handleSearch");
        e.preventDefault();
        setShowError(true);
        const formData = new FormData(e.target);
        const searchQuery = formData.get("searchQuery");
        const language = formData.get("language");
        dispatch(searchAction(searchQuery, language, 1, 100));
    }

    return (
        <Form className="mb-2" onSubmit={onFormSubmit}>
            <Row>
                <Form.Group as={Col} sm={6} controlId="searchText">
                    <Form.Label></Form.Label>
                    <Form.Control name="searchQuery" type="text" placeholder="Search query" />
                </Form.Group>
                <Form.Group as={Col} sm={4} controlId="searchLanguage">
                    <Form.Label></Form.Label>
                    <Form.Control name="language" type="text" placeholder="JavaScript, C#, C++, ..." />
                </Form.Group>
                <Col sm={2} className="align-self-end">
                    <Button className="mt-2" variant="primary" type="submit">Search</Button>
                </Col>
            </Row>
            {showError && errorText ? (
                <Row className="mt-2">
                    <Col>
                        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                            {errorText}
                        </Alert>
                    </Col>
                </Row>
            ) : undefined}
        </Form>
    )
}
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

const SearchBox = () => {
  return (
    <Row className="search-area">
      <Col lg={10}>
        {" "}
        <Form.Control type="text" />
      </Col>

      <Col lg={2}>
      <Button variant="dark" type="submit">
        검색
      </Button>
      </Col>
    </Row>
  );
};

export default SearchBox;

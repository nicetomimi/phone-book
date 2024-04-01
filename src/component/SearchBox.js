import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();
  let { contact } = useSelector((state) => state);
  const searchByName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_USERNAME", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchByName} className="search-form">
      <Row className="search-area">
        <Col lg={10}>
          {" "}
          <Form.Control
            type="text"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>

        <Col lg={2}>
          <Button variant="dark" type="submit">
            검색
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;

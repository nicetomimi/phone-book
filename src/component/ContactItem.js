import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Container className="item-area">
      <Row>
        <Col lg={2}>
          <img
            className="img-area"
            alt=""
            width={100}
            src="https://kpopomo.shop/cdn/shop/products/5_b166b8d8-a4cf-4964-973c-ce1172746683.jpg?v=1690943805"
          />
        </Col>

        <Col lg={10} className="info-area">
          <div>{item.name}</div>
          <div>{item.phoneNum}</div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactItem;

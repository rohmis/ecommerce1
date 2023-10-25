import React from "react";
import { useSelector } from "react-redux";
import { Card, Row, Col, Container } from "react-bootstrap";

export default function Login() {
  const cart = useSelector((state) => state.user.cart); // Assuming 'user' is the slice name

  return (
    <div>
      <h2>Shopping Cart</h2>
      <Container className="cont3">
        <Row className="row">
          {cart.map((item, index) => (
            <Col key={index} className="col1">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="imgs1"
                  variant="top"
                  src={item.image}
                  alt={item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        {/* More rows of product cards can be added here */}
      </Container>
    </div>
  );
}


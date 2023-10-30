import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  ListGroup,
  Row,
  Form,
  InputGroup,
  Stack,
} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/RegisterSlice";

export default function AddToCart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);
  const [itemCounts, setItemCounts] = useState({});

  const handleIncrement = (itemId) => {
    const updatedCounts = { ...itemCounts };
    updatedCounts[itemId] = (updatedCounts[itemId] || 1) + 1;
    setItemCounts(updatedCounts);
  };

  const handleDecrement = (itemId) => {
    const updatedCounts = { ...itemCounts };
    if (updatedCounts[itemId] > 0) {
      updatedCounts[itemId] -= 1;
      setItemCounts(updatedCounts);
    }
  };

  const calculateItemPrice = (item) => {
    const count = itemCounts[item.id] || 1;
    return item.price * count;
  };

  const calculateGrandTotal = () => {
    let grandTotal = 0;
    cart.forEach((item) => {
      grandTotal += calculateItemPrice(item);
    });
    return grandTotal;
  };

  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };

  return (
    <section className="h-100 gradient-custom">
      <Container className="AddToCart py-5 h-100">
        <Row className="justify-content-center my-4">
          <Col md="8">
            <Card className="mb-4">
              <Card.Header className="py-3">
                <Stack direction="horizontal" gap={3}>
                  <div className="p-2" style={{ textAlign: "center" }}>
                    <h5 className="mb-0">Cart - {cart.length} items</h5>
                  </div>
                  <div className="p-2 ms-auto" style={{ textAlign: "center" }}>
                    <h3>Quantity</h3>
                  </div>
                </Stack>
              </Card.Header>
              {cart.map((item, index) => {
                return (
                  <Card.Body key={index} className="cart-item">
                           <Row>
                      <Col lg="3" md="12" className="mb-4 mb-lg-0">
                        <Image
                          src={item.images}
                          style={{ width: "80%", height: "50%" }}
                        />
                        <a href="#!">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.2)",
                            }}
                          ></div>
                        </a>
                        <Stack
                          direction="horizontal"
                          gap={3}
                          style={{ marginTop: "10px" }}
                        >
                          <Button size="sm">
                            <i className="material-icons">&#128156;</i>
                          </Button>
                          <Button size="sm" onClick={() => handleDelete(item)}>
                            <i
                              className="material-icons"
                              style={{ fontSize: "25px", color: "red" }}
                            >
                              &#xe872;
                            </i>
                          </Button>
                        </Stack>
                      </Col>
                      <Col lg="5" md="6" className="mb-4 mb-lg-0">
                        <p>
                          <strong>{item.name}</strong>
                        </p>
                        <p>{item.description.slice(0, 50)}...</p>
                      </Col>
                      <Col
                        lg="4"
                        md="6"
                        className="mb-4 mb-lg-0"
                        style={{ textAlign: "center" }}
                      >
                        <div
                          className="d-flex mb-4"
                          style={{ maxWidth: "300px" }}
                        >
                          <Button
                            className="px-3 me-2"
                            style={{ fontSize: "20px" }}
                            onClick={() => handleDecrement(item.id)}
                          >
                            -
                          </Button>
                          <InputGroup>
                            <Form.Control
                              defaultValue={itemCounts[item.id] || 1}
                              type="number"
                              min={0}
                              label="Quantity"
                            />
                          </InputGroup>
                          <Button
                            className="px-3 ms-2"
                            style={{ fontSize: "20px" }}
                            onClick={() => handleIncrement(item.id)}
                          >
                            +
                          </Button>
                        </div>
                        <p className="text-start text-md-center">
                          <strong>
                            &#8377; {calculateItemPrice(item).toFixed(2)}
                          </strong>
                        </p>
                      </Col>
                    </Row>
                    <div>
                      <hr />
                    </div>
                  </Card.Body>
                );
              })}
            </Card>
          </Col>
          <Col md="4">
            <Card className="mb-4">
              <Card.Header>
                <h5 className="mb-0">Summary</h5>
              </Card.Header>
              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Products
                    <span>&#8377; {calculateGrandTotal().toFixed(2)}</span>
                  </ListGroup.Item>
                   <ListGroup.Item className="d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>Gratis</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>Total amount</strong>
                      <strong>
                        <p className="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>
                        &#8377; {calculateGrandTotal().toFixed(2)}
                      </strong>
                    </span>
                  </ListGroup.Item>
                </ListGroup>
                <Button block="true" size="lg">
                  Go to checkout
                </Button>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Body>
                <p>
                  <strong>Expected shipping delivery</strong>
                </p>
                <p className="mb-0">12.10.2020 - 14.10.2020</p>
              </Card.Body>
            </Card>
                       <Card>
              <Card.Body>
                <p>
                  <strong>We accept</strong>
                </p>
                <Row>
                  <Col className="me-2">
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                  </Col>
                  <Col className="me-2">
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                  </Col>
                  <Col className="me-2">
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                  </Col>
                  <Col>
                    <Image
                      width="25px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                      alt="PayPal acceptance mark"
                    />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          
          </Col>
        </Row>
      </Container>
    </section>
  );
}



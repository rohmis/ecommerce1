import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Card, Stack, Row, Col, Carousel } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToWishlist } from "../redux/RegisterSlice";


export default function Home({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);
  const wishlist = useSelector((state) => state.user.wishlist);
  const [showPop, setShowPop] = useState(false);
  const [showlist, setShowlist] = useState(true);
  const [product, setProduct] = useState(null);
  const [alertMessage, setAlertMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleView = (item) => {
    setProduct(item);
    setShowPop(true);
    setShowlist(false);
  };

  const handleBack = () => {
    setShowlist(true);
    setShowPop(false);
  };

  const handleAddToCart = (product) => {
    if (isItemInCart(product)) {
      alert("This item is already in the cart");
    } else {
      dispatch(addToCart(product));
    }
  };

  const handleAddToWishlist = (product) => {
    if (isItemInWishlist(product)) {
      alert("This item is already in the wishlist");
    } else {
      dispatch(addToWishlist(product));
    }
  };

  const isItemInCart = (product) => {
    return cart.some((item) => item.id === product.id);
  };

  const isItemInWishlist = (product) => {
    return wishlist.some((item) => item.id === product.id);
  };

  return (
    <>
      <div className="cont1">
      {showlist && (
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img className="imgs" src="./images/pro1.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h5>First slide label</h5>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="imgs" src="./images/pro2.jpg" alt="Second slide" />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="imgs" src="./images/pro3.jpg" alt="Third slide" />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}
        {showlist && (
          <Container className="cont3">
            <Row className="row">
              {products.map((product) => (
                <Col key={product.id} className="col1">
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      className="imgs1"
                      variant="top"
                      src={product.image}
                      alt={product.name}
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>
                        {product.description.slice(0, 50)}...
                      </Card.Text>
                      <Card.Text>
                        <strong>&#8377; {product.price}</strong>
                      </Card.Text>
                      <Stack direction="horizontal" gap={1}>
                        <Button
                          title="view details"
                          variant="primary"
                          onClick={() => handleView(product)}
                        >
                          View
                        </Button>
                        <Button
                          title="Add To Cart"
                          variant="dark"
                          onClick={() => handleAddToCart(product)}
                        >
                          &#128722;
                        </Button>
                        <Button
                          title="Watch List"
                          variant="dark"
                          onClick={() => handleAddToWishlist(product)}
                        >
                          &#128156;
                        </Button>
                      </Stack>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        )}
        {showPop && (
          <Container>
            <Card
              style={{
                alignItems: "center",
                width: "70%",
               marginTop:"10px",
               marginBottom:"20px",
                margin: "auto",
                marginBottom: "20px",
                padding: "20px",
              }}
            >
              {product && (
                <>
                  <Card.Img
                    className="imgs1"
                    variant="top"
                    style={{
                      width: "200px",
                      height: "200px",
                      justifyContent: "center",
                    }}
                    src={product.image}
                    alt={product.name}
                  />
                  <Card.Body>
                    <Card.Title>
                      <h1>{product.name}</h1>
                    </Card.Title>
                    <Card.Text style={{ textAlign: "justify" }}>
                      {product.description}...
                    </Card.Text>
                    <Card.Text>
                      <strong>&#8377; {product.price}</strong>
                    </Card.Text>
                  </Card.Body>
                  <Stack
                    direction="horizontal"
                    gap={5}
                    style={{
                      alignItems: "center",
                      margin: "auto",
                      padding: "10px",
                    }}
                  >
                    <Button
                      title="view details"
                      variant="primary"
                      onClick={handleBack}
                    >
                      Back
                    </Button>
                  </Stack>
                </>
              )}
            </Card>
          </Container>
        )}
  
      </div>
    </>
  );
}



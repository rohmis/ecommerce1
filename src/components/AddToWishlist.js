import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Container, Button, Stack } from "react-bootstrap";
import { removeFromWishlist } from "../redux/RegisterSlice";

export default function AddToWishlist() {
  const dispatch = useDispatch();

  const [showPop, setShowPop] = useState(false);
  const [showWishlist, setShowWishlist] = useState(true);
  const [product, setProduct] = useState([]);
  const wishlist = useSelector((state) => state.user.wishlist);

  const handleView = (item) => {
    setShowPop(true);
    setProduct(item);
    setShowWishlist(false);
  };
  const handleBack = (item) => {
    setShowWishlist(true);
    setShowPop(false);
  };
  const handleDelete = (item) => {
    dispatch(removeFromWishlist(item));
    // console.log(item.id)
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      {showWishlist && (
        <Container className="cont4">
          <Card
            style={{
              width: "50%",
              margin: "auto",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              color: "silver",
              backgroundColor: "rgb(66, 61, 61)",
            }}
          >
            <Card.Body>
              <h1 className="text-center">Wishlist</h1>
            </Card.Body>
          </Card>

          <Row className="row">
            {wishlist.map((item, index) => (
              <Col key={index} className="col1">
                <Card
                  style={{ width: "18rem", height: "100%" }}
                  className="cart-item"
                >
                  <Card.Img
                    className="imgs1"
                    variant="top"
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "50%",
                      height: "50%",
                      margin: "auto",
                      padding: "10px",
                    }}
                  />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.description.slice(0, 70)}...</Card.Text>
                    <Card.Text>
                      <strong>&#8377; {item.price}</strong>
                    </Card.Text>
                  </Card.Body>
                  <Stack
                    direction="horizontal"
                    gap={3}
                    style={{
                      alignItems: "center",
                      margin: "auto",
                      padding: "10px",
                    }}
                  >
                    <Button
                      title="view details"
                      variant="primary"
                      onClick={() => handleView(item)}
                    >
                      View
                    </Button>
                    <Button
                      title="Add To Cart"
                      variant="dark"
                      // onClick={() => handleAddToCart(product)}
                    >
                      &#128722;
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

              margin: "auto",
              marginBottom: "20px",
              padding: "20px",
            }}
            className="cart-item"
          >
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
              style={{ alignItems: "center", margin: "auto", padding: "10px" }}
            >
              <Button
                title="view details"
                variant="primary"
                onClick={() => handleBack()}
              >
                Back
              </Button>
            </Stack>
          </Card>
        </Container>
      )}
    </div>
  );
}

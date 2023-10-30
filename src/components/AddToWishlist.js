import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Row, Col, Container, Button, Stack } from "react-bootstrap";
import { removeFromWishlist } from "../redux/RegisterSlice";
import { useNavigate } from "react-router-dom";

export default function AddToWishlist() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.user.wishlist);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleView = (item) => {
    navigate(`/ShowProduct/${item.id}`, { state: item });
  };

  const handleDelete = (item) => {
    dispatch(removeFromWishlist(item));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px", marginBottom: "-200px" }}>
      <Container className="cont4">
        <Card style={{ width: "50%", margin: "auto", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", color: "silver", backgroundColor: "rgb(66, 61, 61)" }}>
          <Card.Body>
            <h1 className="text-center">Wishlist</h1>
          </Card.Body>
        </Card>
        <Row className="row">
          {wishlist.map((item, index) => (
            <Col key={index} className="col1">
              <Card style={{ width: "18rem", height: "100%" }} className="cart-item">
                <Card.Img
                  className="imgs1"
                  variant="top"
                  src={item.images}
                  alt={item.name}
                  style={{ width: "50%", height: "50%", margin: "auto", padding: "10px" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.description.slice(0, 70)}...</Card.Text>
                  <Card.Text>
                    <strong>&#8377; {item.price}</strong>
                  </Card.Text>
                </Card.Body>
                <Stack direction="horizontal" gap={3} style={{ alignItems: "center", margin: "auto", padding: "10px" }}>
                  <Button title="view details" variant="primary" onClick={() => handleView(item)}>
                    View
                  </Button>
                  <Button variant="dark">&#128722;</Button>
                  <Button size="sm" onClick={() => handleDelete(item)}>
                    <i className="material-icons" style={{ fontSize: "25px", color: "red" }}>
                      &#xe872;
                    </i>
                  </Button>
                </Stack>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

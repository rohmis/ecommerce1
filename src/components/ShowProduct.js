import React, { useEffect } from "react";
import { Button, Container, Stack, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function ShowProduct() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();
  const product = location.state;

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <>
      <Container className="ShowProduct">
        <Card
          style={{
            alignItems: "center",
            width: "70%",
            marginTop: "10px",
            marginBottom: "20px",
            margin: "auto",
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
                src={product.images[0]}
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
    </>
  );
}

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Carousel } from "react-bootstrap";
import { Card, Stack, Row, Col } from "react-bootstrap";

export default function Home() {
  return (
    <>
      <div className="cont1">
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

        <Container className="cont3">
          <Row className="row">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img className="imgs1" variant="top" src="./images/apple1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Stack direction="horizontal" gap={1}>
                  <Button title="view details" variant="primary">view</Button>
                  <Button title="Add To Cart" variant="dark">&#128722;</Button>
                  <Button title="Watch List" variant="dark">&#128156;</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img className="imgs1" variant="top" src="./images/shoe1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Stack direction="horizontal" gap={1}>
                  <Button title="view details" variant="primary">view</Button>
                  <Button title="Add To Cart" variant="dark">&#128722;</Button>
                  <Button title="Watch List" variant="dark">&#128156;</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img className="imgs1" variant="top" src="./images/glasses1.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Stack direction="horizontal" gap={1}>
                  <Button title="view details" variant="primary">view</Button>
                  <Button title="Add To Cart" variant="dark">&#128722;</Button>
                  <Button title="Watch List" variant="dark">&#128156;</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="row">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img className="imgs1" variant="top" src="./images/glasses2.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Stack direction="horizontal" gap={1}>
                  <Button title="view details" variant="primary">view</Button>
                  <Button title="Add To Cart" variant="dark">&#128722;</Button>
                  <Button title="Watch List" variant="dark">&#128156;</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img className="imgs1" variant="top" src="./images/shoe2.jpg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Stack direction="horizontal" gap={1}>
                  <Button title="view details" variant="primary">view</Button>
                  <Button title="Add To Cart" variant="dark">&#128722;</Button>
                  <Button title="Watch List" variant="dark">&#128156;</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img className="imgs1" variant="top" src="./images/shoe3.jpeg" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Stack direction="horizontal" gap={1}>
                  <Button title="view details" variant="primary">view</Button>
                  <Button title="Add To Cart" variant="dark">&#128722;</Button>
                  <Button title="Watch List" variant="dark">&#128156;</Button>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

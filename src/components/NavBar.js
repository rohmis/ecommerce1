import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Stack } from "react-bootstrap";

export default function NavBar() {
  return (
    <>
      <Navbar
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        sticky="top"
      >
       
      <Container fluid>
          <Navbar.Brand href="#">R-Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="link1 me-3" to="/">
                Home
              </Link>
              <Link className="link1 me-3" to="/ShowProduct">
                ShowProduct
              </Link>
              <Link className="link1 me-3" to="/AddToCart">
                Add to cart
              </Link>
            </Nav>
           
            <Stack direction="horizontal" gap={2}>
              <Button title="Add To Cart" variant="dark">
                &#128722;
              </Button>
              <Button title="Watch List" variant="dark">
                &#128156;
              </Button>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

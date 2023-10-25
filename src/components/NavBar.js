import React from "react";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Badge, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function NavBar() {
  const cart = useSelector((state) => state.user.cart);
  const wishlist=useSelector((state)=> state.user.wishlist)
  // const len=cart.length
  // console.log(len)
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
          <Navbar.Brand href="#"  style={{ maxHeight: "100px",padding:"10px" ,marginLeft:"20px"}}>R-Mart</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px",padding:"10px" ,marginLeft:"20px"}}
              navbarScroll
            >
              <Link className="link1 me-3" to="/">
                Home
              </Link>

              <Link className="link1 me-3" to="/Login">
                Login
              </Link>
              <Link className="link1 me-3" to="/Register">
                Register
              </Link>
            </Nav>

            <Stack direction="horizontal" gap={3} style={{padding:"10px"}}>
              <Button
                style={{ width: "50px", height: "40px" }}
                title="Add To Cart"
                variant="dark"
              >
                <Link className="link1 me-3" to="/AddToCart">
                  &#128722;
                </Link>
              </Button>
              <Badge
                style={{
                  fontSize: "10px",
                  marginLeft: "-20px",
                  borderRadius: "50%",
                }}
              >
                {cart.length}
              </Badge>
              <Button title="Watch List" variant="dark"style={{ width: "50px", height: "40px" }}>
                <Link className="link1 me-3" to="/AddToWishlist">
                  &#128156;
                </Link>
              </Button>
              <Badge
                style={{
                  fontSize: "10px",
                  marginLeft: "-20px",
                  borderRadius: "50%",
                }}
              >
                {wishlist.length}
              </Badge>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Badge, Stack, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/RegisterSlice";
import logo from "./image.png";

export default function NavBar() {
  const cart = useSelector((state) => state.user.cart);
  const wishlist = useSelector((state) => state.user.wishlist);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleLogout = () => {
    dispatch(logout());
  };

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
          <img src={logo} style={{ width: "10%" }} alt="logo" />
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{
                maxHeight: "100px",
                padding: "10px",
                marginLeft: "20px",
              }}
              navbarScroll
            >
              {isLoggedIn && (
                <Link className="link1 me-3" to="/">
                  Home
                </Link>
              )}

              {!isLoggedIn && (
                <Link className="link1 me-3" to="/Login">
                  Login
                </Link>
              )}
            </Nav>
            {isLoggedIn && (
              <>
                <Stack
                  direction="horizontal"
                  gap={3}
                  style={{ padding: "10px" }}
                >
                  <Link
                    className="link1 me-3"
                    style={{ fontSize: "25px" }}
                    to="/AddToCart"
                  >
                    &#128722;
                  </Link>
                  <Badge
                    style={{
                      fontSize: "8px",
                      marginLeft: "-41px",
                      borderRadius: "50%",
                    }}
                  >
                    {cart.length}
                  </Badge>
                  <Link
                    className="link1 me-3"
                    style={{ fontSize: "25px" }}
                    to="/AddToWishlist"
                  >
                    &#128156;
                  </Link>
                  <Badge
                    style={{
                      fontSize: "8px",
                      marginLeft: "-41px",
                      borderRadius: "50%",
                    }}
                  >
                    {wishlist.length}
                  </Badge>
                </Stack>
                <div
                  style={{
                    backgroundColor: "white",
                    width: "4%",
                    height: "40px",
                    textAlign: "center",
                    borderRadius: "50%",
                  }}
                >
                  <i className="fa fa-user" style={{ fontSize: "200%" }}>
                    <NavDropdown
                      id="navbarScrollingDropdown"
                      style={{ marginTop: "-12px" }}
                      align="end"
                    >
                      <div style={{ fontSize: "25px", textAlign: "center" }}>
                        <Link className="link1 me-3" to="/UserProfile">
                          Profile
                        </Link>
                      </div>
                      <NavDropdown.Divider />
                      <div style={{ fontSize: "25px", textAlign: "center" }}>
                        <Link
                          to="/Login"
                          style={{ textDecoration: "none" }}
                          onClick={handleLogout}
                        >
                          Logout
                        </Link>
                      </div>
                    </NavDropdown>
                  </i>
                </div>
              </>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

          
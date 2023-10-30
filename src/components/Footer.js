import React from "react";
import { Container, Button } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Footer() {

  return (
    <div className="wrapper">
      <footer className="bg-dark text-center text-white">
        <Container className="p-4 pb-0">
          <section className="mb-4">
            <Button variant="primary" className="m-1">
              <FaFacebook />
            </Button>

            <Button variant="info" className="m-1">
              <FaTwitter />
            </Button>

            <Button variant="danger" className="m-1">
              <FaGoogle />
            </Button>

            <Button variant="success" className="m-1">
              <FaInstagram />
            </Button>

            <Button variant="primary" className="m-1">
              <FaLinkedin />
            </Button>

            <Button variant="warning" className="m-1">
              <FaGithub />
            </Button>
          </section>
        </Container>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:
          <a className="text-white" href="https://github.com/rohmis/ecommerce1">
            Rohit Mishra
          </a>
        </div>
      </footer>
    </div>
  );
}

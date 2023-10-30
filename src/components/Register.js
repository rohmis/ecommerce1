import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  Row,
  Col,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import { addUser } from "../redux/RegisterSlice";
import { Link } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cart: [],
    wishlist: [],
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(inputValues);
    setFormErrors(errors);
    setIsSubmit(true);

    if (Object.keys(errors).length === 0) {
      dispatch(addUser(inputValues));
      setInputValues({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });
    }
  };
  
  const validate = (values) => {
    const errors = {};
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const regName = /\d+/g;
    const regMobile = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

    if (!values.name) {
      errors.name = "Username is required!";
    } else if (regName.test(values.name)) {
      errors.name = "Please fill the correct name";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regEmail.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    if (!values.phone) {
      errors.phone = "Mobile number is required";
    } else if (!regMobile.test(values.phone)) {
      errors.phone = "Please fill the correct mobile number";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Confirm password does not match the password";
    }

    return errors;
  };

  return (
    <Container className="rgs">
      <Row>
        <Col>
          <Card style={{ width: "50%", margin: "auto", alignContent: "center" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <h1>Sign Up Form</h1>
                {isSubmit && (
                  <h2 style={{ color: "green" }}>Form submitted successfully</h2>
                )}
              </Card.Title>
              <Form className="frm" onSubmit={handleSubmit}>
                <Form.Group as={Row} className="frm1">
                  <Form.Label>Name :</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Name..."
                    name="name"
                    value={inputValues.name}
                    onChange={handleChange}
                  />
                  <p>{formErrors.name}</p>
                </Form.Group>

                <Form.Group as={Row} className="frm1">
                  <Form.Label>Email :</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email.."
                    name="email"
                    value={inputValues.email}
                    onChange={handleChange}
                  />
                  <p>{formErrors.email}</p>
                </Form.Group>

                <Form.Group as={Row} className="frm1">
                  <Form.Label>Phone :</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="10"
                    placeholder="Phone no.."
                    name="phone"
                    value={inputValues.phone}
                    onChange={handleChange}
                  />
                  <p>{formErrors.phone}</p>
                </Form.Group>

                <Form.Group as={Row} className="frm1">
                  <Form.Label>Password :</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password..."
                    name="password"
                    value={inputValues.password}
                    onChange={handleChange}
                  />
                  <p>{formErrors.password}</p>
                </Form.Group>

                <Form.Group as={Row} className="frm1">
                  <Form.Label>Confirm Password :</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password..."
                    name="confirmPassword"
                    value={inputValues.confirmPassword}
                    onChange={handleChange}
                  />
                  <p>{formErrors.confirmPassword}</p>
                </Form.Group>

                <Form.Group as={Row} className="frm1">
                  <Col>
                    <Button type="submit">Sign Up</Button>
                  </Col>
                </Form.Group>
              </Form>
              <h3>
                Already have an account? <Link to="/Login">Sign In</Link>
              </h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      {/* More rows of product cards can be added here */}
    </Container>
  );
}

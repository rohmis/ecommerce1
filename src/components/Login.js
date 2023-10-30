import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card, Row, Col, Container, Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { login, addUserProflie ,clearUserProflie} from "../redux/RegisterSlice";

export default function Login() {
  const userData = useSelector((state) => state.user.userData);
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    id: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    dispatch(clearUserProflie())
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    for (const user of userData) {
      if (user.email === inputValues.email && user.password === inputValues.password) {
        dispatch(addUserProflie(user));
        console.log(user)
        dispatch(login(true));
        navigate('/');
        setInputValues({
          email: "",
          password: "",
          id: "",
        });
      }
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Container className="lgn">
        <Row>
          <Col>
            <Card style={{ width: "50%", margin: "auto", alignContent: "center" }}>
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h1>Login Form</h1>
                </Card.Title>
                <Form className="frm" onSubmit={handleSubmit}>
                  <Form.Group as={Row}>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email..."
                      value={inputValues.email}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      placeholder="Enter a password..."
                      value={inputValues.password}
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col>
                      <Form.Check label="Remember me" />
                    </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col>
                      <Button type="submit">Sign In</Button>
                    </Col>
                  </Form.Group>
                </Form>
                <Card.Text style={{fontSize:"30px"}}>
                  
                    Don't have an account?{" "}
                    <Link to="/Register">Sign Up</Link>
                  
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

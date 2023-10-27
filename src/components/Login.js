import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Card,
  Row,
  Col,
  Container,
  Form,
  Button,
  NavLink,
} from "react-bootstrap";

export default function Login() {
  const userData = useSelector((state) => state.user.userData); 
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
    id: "",
  });
  const dispatch = useDispatch();

  // const [navigation, setNavigation] = useState(false);
  const [formErrors, setFormErrors] = useState("");


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //  console.log(inputValues.email)
    for (const user of userData) {
      if (user.email === inputValues.email && user.password === inputValues.password) {
       console.log("true")
       setInputValues({
        email: "",
        password: "",
        id: "",
      })


    }
    else{
      console.log("false")
    }
    

  }
}
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Card
              style={{ width: "50%", margin: "auto", alignContent: "center" }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h1>Login Form</h1>
                </Card.Title>
                <Card.Text>
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
                    {/* <h3>{formErrors}</h3> */}
                    <Form.Group as={Row}>
                      <Col>
                        <Button type="submit">Sign In</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <h3>Don't have an account? Sign Up</h3>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        {/* More rows of product cards can be added here */}
      </Container>
    </div>
  );
}

import React ,{useState,useEffect} from "react";
import { useSelector ,useDispatch} from "react-redux";
import {
  Card,
  Row,
  Col,
  Container,
  Form,
  Button,
  NavLink,
} from "react-bootstrap";
import { addUser } from "../redux/RegisterSlice";
import { Link } from "react-router-dom";
import { login } from "../redux/RegisterSlice";
import { isRegister } from "../redux/RegisterSlice";

export default function Login() {
  const userData = useSelector((state) => state.user.userData); // Assuming 'user' is the slice name
  const dispatch=useDispatch()
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);

// const changeLgn=()=>{
//   // dispatch(login(true));
//   // dispatch(isRegister(false));
// }

console.log(userData)
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    cart:[],
    wishlist:[],
    
  };
  const [inputValues, setInputValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [data, setData] = useState([]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
    // console.log(inputValues);
  };

  useEffect(() => {
    // console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formErrors);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(inputValues);
    setFormErrors(validate(inputValues));
    setIsSubmit(true);

    // axios.post(user, inputValues).then((response) => {
    //   setData(response.data);
    // });
    console.log(inputValues)
    dispatch(addUser(inputValues))

    setInputValues({
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };
  const validate = (values) => {
    const errors = {};
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const regName = /\d+/g;
    const regMobile = /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;

    if (!values.name) {
      errors.name = "Username is required!";
    } else if (regName.test(values.name)) {
      errors.name = "please fill the correct name";
    }

    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regEmail.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.phone) {
      errors.phone = "mobile number is required";
    } else if (!regMobile.test(values.phone)) {
      errors.phone = "please fill the correct mobile number";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "confirm password doesent match the password";
    }

    return errors;
  };

  return (
    <div>
      <Container className="rgs">
        <Row >
          <Col >
            <Card
              style={{ width: "50%", margin: "auto", alignContent: "center" }}
            >
              <Card.Body>
                <Card.Title style={{ textAlign: "center" }}>
                  <h1>SignUp Form</h1>
                </Card.Title>
                <Card.Title style={{ textAlign: "center" }}>
                  {isSubmit && (<h2 style={{color:"green"}}>Form submitted successfully</h2>)}
                </Card.Title>
                <Card.Text>
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
                    </Form.Group>
                    <p>{formErrors.name}</p>

                    <Form.Group as={Row} className="frm1">
                      <Form.Label>Email :</Form.Label>

                      <Form.Control
                        type="email"
                        placeholder="Email.."
                        name="email"
                        value={inputValues.email}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <p>{formErrors.email}</p>

                    <Form.Group as={Row} className="frm1">
                      <Form.Label>phone :</Form.Label>

                      <Form.Control
                        type="text"
                        maxLength="10"
                        placeholder="phone no.."
                        name="phone"
                        value={inputValues.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <p>{formErrors.phone}</p>

                    <Form.Group as={Row} className="frm1">
                      <Form.Label>Password :</Form.Label>

                      <Form.Control
                        type="password"
                        placeholder="Password..."
                        name="password"
                        value={inputValues.password}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <p>{formErrors.password}</p>

                    <Form.Group as={Row} className="frm1">
                      <Form.Label>Confirm Password :</Form.Label>

                      <Form.Control
                        type="password"
                        placeholder="Confirm Password..."
                        name="confirmPassword"
                        value={inputValues.confirmPassword}
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <p>{formErrors.confirmPassword}</p>

                    <Form.Group as={Row} className="frm1">
                      <Col>
                        <Button type="submit">Sign Up</Button>
                      </Col>
                    </Form.Group>
                  </Form>
                  <h3>Already have an account? <Link to="/Login" >Sign In</Link></h3>
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

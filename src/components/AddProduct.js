import React, { useState,useEffect } from "react";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import axios from "axios";
import { connect } from "react-redux";
import ShowProduct from "./ShowProduct";

function AddProduct({ product }) {
    const [showProduct,setShowProduct]=useState(false)
  const [formValues, setFormValues] = useState({
    title: "",
    description: "",
    image: null,
  });
  const [users,setUsers]=useState([])

  useEffect(() => {
    axios
      .get(product)
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => console.log(err));
  }, [product]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormValues({ ...formValues, [name]: files[0] });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();


    axios
      .post(product, formValues) // Replace with your API endpoint
      .then((response) => {
        console.log("Product added successfully:", response.data);
        // Clear form values
        setFormValues({ title: "", description: "", image: null });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
      setShowProduct(true)
  };

  return (
    <>
    <h1>rohit</h1>
    <div>{users.map((values,index)=>{
        <div>{values.title}</div>
    })}</div>

    <Container>
      <h1>Create Product</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row}>
          <Form.Label>Title:</Form.Label>
          <Form.Control
            type="text"
            name="title"
            value={formValues.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label>Description:</Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label>Image:</Form.Label>
          <Form.Control type="file" name="image" onChange={handleChange} />
        </Form.Group>

        <Button type="submit">Submit</Button>

      </Form>
    </Container>
{showProduct && <ShowProduct/>}
    </>
  );
}
const mapStateToProps = (state) => ({
  product: state.productData,
});

export default connect(mapStateToProps)(AddProduct);



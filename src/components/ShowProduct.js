import React, { useState, useEffect } from "react";
import {
  Badge,
  Button,
  Container,
  Stack,
  Table,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

function ShowProduct({ product }) {
  const [users, setUsers] = useState([]);
  const [showEdit, setShowEdit] = useState(false);
  const [show, setShow] = useState(true);



  useEffect(() => {

      axios
        .get(product)
        .then((res) => {
          setUsers(res.data);
        })
        .catch((err) => console.log(err));
    
  }, [product]);

console.log(users)

 


  return (
    <>
      {
        (users  ? (
          <Container>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>name</th>
                  <th>email</th>
                  <th>images</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>
                      {index + 1}
                      
                    </td>
                    <td>{user.title}</td>
                    <td>{user.description}</td>
                    <td><img src={user.image} /></td>
                    
                  </tr>
                ))}
              </tbody>
            </Table>
          </Container>
        ) : (
          <p>No data available</p>
        ))}

   
    </>
  );
}

const mapStateToProps = (state) => ({
  product: state.productData,
});

export default connect(mapStateToProps)(ShowProduct);

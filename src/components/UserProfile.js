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
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { useLocation } from "react-router-dom";

export default function UserProfile() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
//   const navigate=useNavigate()
//   const location = useLocation();
//   const product = location.state;

//   const handleBack=()=>{
//     navigate('/AddToWishlist')
//   }
  return (
    <>
      <Container style={{width:"60%",marginTop:'-10px',padding:'20px', marginBottom:"-200px"}}>
     
          {/* {product && ( */}
            
             
              
              <div className="card my-3" style={{ margin: "auto" }}>
      <div className="card-body">
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">Kenneth Valdez</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">fip@jukmuh.al</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Phone</h6>
          </div>
          <div className="col-sm-9 text-secondary">(239) 816-9029</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Mobile</h6>
          </div>
          <div className="col-sm-9 text-secondary">(320) 380-4539</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm-3">
            <h6 className="mb-0">Address</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            Bay Area, San Francisco, CA
          </div>
        </div>
      </div>
    </div>
              
             
            
     
      </Container>
    </>
  );
}

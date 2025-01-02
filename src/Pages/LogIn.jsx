import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

const LogIn = () => {
  const [validated, setValidated] = useState(false);
  const [data,setData] = useState({
    email: '',
    password: ''
  });
  console.log('data',data);
  const [error,setError] = useState({});

  const validateForm =() => {
    const newError = {};
    if(!data.email){
        newError.email="Email is required."
    }else if(!/\S+@\S+\.\S+/.test(data.email)){
        newError.email="Email is invalid."
    }

    if(!data.password){
        newError.password="Password is required."
    }


  }
  

  const handleChange = (e)=>{
    const {name,value} = e.target;
    setData((prev)=> ({
        ...prev,
        [name]: value,
    }))

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateError = validateForm();
    setError(validateError);



  };
  return (
    <>
      <div className="login-bg">
        <div className="login-inner">
          <h1 className="my-4">User Login</h1>
          <p className="text-center">Hey, Enter your details to get sign in to your account</p>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3 gap-4">
              <Form.Group controlId="validationCustom01">
                <Form.Label className="fw-bold">Email Id</Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Enter Email Id"
                  defaultValue="Mark"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group controlId="validationCustom02">
                <Form.Label className="fw-bold">Password</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="Enter Password"
                  defaultValue="Mark"
                  name="password"
                  value={data.password}
                  onChange={handleChange}
                />
                <Form.Control.Feedback>
                  Password should be atleast 6 characters
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="text-center logged">
                <h6 className="fw-normal">Having trouble in sign in?</h6>
                <button type="submit" className="my-2">Sign in</button>
              </Form.Group>
            </Row>
          </Form>
          <p className="text-center signup-text">Dont't have an account ? <a href="#" className="fw-bold ">Request Now</a></p>

        </div>
      </div>
    </>
  );
};

export default LogIn;

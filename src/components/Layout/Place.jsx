import React, { useContext, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Place = () => {
  const {user} = useContext(AuthContext)
  const [error , setError] =useState("")
  const data = useLoaderData();
  console.log(data);
  const handlePlace =(e)=>{
    e.preventDefault()
    const form = e.target
    const origin =form.origin.value
    const destination =form.destination.value
    if(!origin || !destination ){
      setError("Please Write something in the fields")
      return
    }
  }
  return (
    <div
      className="bg-img"
      style={{
        height: "100vh",
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)) , url(${data?.image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container h-100">
        <div className="h-100 d-flex justify-content-between align-items-center">
          <div className="w-50">
            <h1 className="text-warning">{data?.title}</h1>
            <p className="text-white w-75">{data?.description}</p>
          </div>
          <div className=" w-50">
            {error && <p className="text-danger">{error}</p>}
            <Form onSubmit={handlePlace} className="bg-white p-4 d-flex flex-column">
              <Row className="mb-3">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label>Origin</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Origin"
                    name="origin"
                  />
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label>Destination</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="destination"
                    placeholder="Destination"
                  />
                </Form.Group>
                <div className="d-flex justify-content-start align-items-center">
                  <Form.Group
                    md="4"
                    className="me-2"
                    controlId="validationCustom02"
                  >
                    <Form.Label>From</Form.Label> <br />
                    <input type="date" />
                  </Form.Group>
                  <Form.Group
                    md="4"
                    className="me-2"
                    controlId="validationCustom02"
                  >
                    <Form.Label>To</Form.Label> <br />
                    <input type="date" />
                  </Form.Group>
                </div>
              </Row>
              <Link to={`/hotel/${data.id}`}>
                <Button type="submit" className="btn-warning">Start Booking</Button>
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;

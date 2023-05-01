import React from "react";
import { Button, Form, Row } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const Place = () => {
  const data = useLoaderData();
  console.log(data);
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
            <Form className="bg-white p-4 d-flex flex-column">
              <Row className="mb-3">
                <Form.Group md="4" controlId="validationCustom01">
                  <Form.Label >Origin</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Origin"
                    defaultValue="Mark"
                  />
                </Form.Group>
                <Form.Group md="4" controlId="validationCustom02">
                  <Form.Label >Destination</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Destination"
                    defaultValue="Otto"
                  />
                </Form.Group>
                <div className="d-flex justify-content-start align-items-center">
                <Form.Group md="4" className="me-2" controlId="validationCustom02">
                  <Form.Label >From</Form.Label> <br />
                  <input type="date" />
                </Form.Group>
                <Form.Group md="4" className="me-2" controlId="validationCustom02">
                  <Form.Label >To</Form.Label>  <br />
                  <input type="date" />
                </Form.Group>
                </div>
              </Row>
              <Button type="submit">Start Booking</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Place;

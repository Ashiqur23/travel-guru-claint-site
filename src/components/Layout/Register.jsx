import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { signIn } = useContext(AuthContext);
  const [errorMassage, setErrorMassage] = useState("");
  const navigate = useNavigate()
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        form.reset();
        navigate('/')
      })
      .catch((err) => {
        const errMassage = err.message;
        setErrorMassage(errMassage);
      });
  };
  return (
    <div className="container">
      <div
        className="d-flex flex-column justify-content-center align-content-center"
        style={{ height: "100vh" }}
      >
        <h1 className="text-warning w-100 text-center">Please is Register</h1>
        <div className="mt-5">
          <div className="">
            <Form
              className="mx-auto "
              onSubmit={handleRegister}
              style={{ width: "50%" }}
            >
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo Url</Form.Label>
                <Form.Control
                  type="text"
                  name="photo"
                  required
                  placeholder="Photo URL"
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  //   value={password}
                  //   onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              {errorMassage && <p>{errorMassage}</p>}
              <p>
                Already Have an Account?
                <Link to="/login">Please login</Link>
              </p>
              <Button className="btn btn-warning" type="submit">
                Register
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

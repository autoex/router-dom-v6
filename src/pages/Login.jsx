import React from "react";
import { Button, Form, FormControl, InputGroup } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../hook/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const { user, singIn } = useAuth();
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    singIn(form.login.value, () => navigate(from, { replace: true }));
  };

  return (
    <div>
      <p>{location?.state?.from}</p>
      {user ? (
        user + ", you are loged in"
      ) : (
        <Form onSubmit={loginHandler}>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
              name="login"
            />
            <Button variant="outline-secondary" type="submit">
              Button
            </Button>
          </InputGroup>
        </Form>
      )}
    </div>
  );
};

export default Login;
